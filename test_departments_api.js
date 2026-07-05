const API_URL = 'https://api.agri-peaceandchild.org/api/v1';
const credentials = {
  email: 'rh@apc-agri.org',
  password: 'RH@2026!'
};

async function runTest() {
  console.log("1. Authentification en tant qu'Admin RH...");
  let token;
  try {
    const loginRes = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const result = await loginRes.json();
    if (!loginRes.ok) throw new Error(result.message || 'Error logging in');
    token = result.data?.accessToken || result.accessToken;
    console.log("✅ Authentifié. Token obtenu.");
  } catch (err) {
    console.error("❌ Échec de l'authentification :", err.message);
    return;
  }

  const authHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  console.log("\n2. Création d'un département de test ('Finance et Logistique')...");
  let createdId;
  try {
    const createRes = await fetch(`${API_URL}/departments`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        name: `Test Finance ${Date.now()}`,
        description: "Département de test pour valider l'API",
        order: 5,
        isActive: true
      })
    });
    const text = await createRes.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      console.error(`❌ Échec de la création. Code HTTP: ${createRes.status}. Corps de la réponse non-JSON :`);
      console.log(text.substring(0, 500));
      return;
    }
    if (!createRes.ok) throw new Error(result.message || 'Error creating');
    const dept = result.data || result;
    createdId = dept.id;
    console.log(`✅ Département créé avec succès. ID: ${createdId}`);
  } catch (err) {
    console.error("❌ Échec de la création :", err.message);
    return;
  }

  console.log("\n3. Récupération de la liste complète (Admin)...");
  try {
    const listRes = await fetch(`${API_URL}/departments/admin/all`, {
      headers: authHeaders
    });
    const result = await listRes.json();
    if (!listRes.ok) throw new Error(result.message || 'Error listing admin');
    const list = result.data || result;
    console.log(`✅ ${list.length} département(s) récupéré(s) au total.`);
  } catch (err) {
    console.error("❌ Échec de la récupération complète :", err.message);
  }

  console.log("\n4. Récupération publique (Actifs)...");
  try {
    const publicRes = await fetch(`${API_URL}/departments`);
    const result = await publicRes.json();
    if (!publicRes.ok) throw new Error(result.message || 'Error listing public');
    const list = result.data || result;
    console.log(`✅ ${list.length} département(s) actif(s) récupéré(s) publiquement.`);
  } catch (err) {
    console.error("❌ Échec de la récupération publique :", err.message);
  }

  console.log(`\n5. Suppression du département de test (${createdId})...`);
  try {
    const delRes = await fetch(`${API_URL}/departments/${createdId}`, {
      method: 'DELETE',
      headers: authHeaders
    });
    const result = await delRes.json();
    if (!delRes.ok) throw new Error(result.message || 'Error deleting');
    console.log("✅ Département supprimé avec succès.");
  } catch (err) {
    console.error("❌ Échec de la suppression :", err.message);
  }
  
  console.log("\n🎉 Test de l'API terminé !");
}

runTest();
