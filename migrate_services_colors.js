const mysql = require('mysql2/promise');
require('dotenv').config();

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'apc_db'
  });

  console.log("Connexion à la base de données établie.");

  try {
    // Check if bgClass and accentClass exist, read them, then update
    const [services] = await connection.query('SELECT id, bgClass FROM services');

    // Mappings of old tailwind classes to hex colors
    const colorMappings = {
      'bg-emerald-500': '#10b981',
      'bg-apc-green': '#1a472a',
      'bg-apc-blue': '#1e3a8a',
      'bg-apc-alert': '#ef4444',
      'bg-purple-600': '#9333ea',
      'bg-teal-600': '#0d9488',
      'bg-blue-600': '#2563eb'
    };

    console.log("Exécution de la requête 1/3... (Ajout de colorHex)");
    try {
      await connection.query(`
        ALTER TABLE \`services\` 
        ADD COLUMN \`colorHex\` varchar(7) DEFAULT '#1a472a';
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (La colonne colorHex existe probablement déjà)");
    }

    console.log("Migration des données existantes...");
    let updatedCount = 0;
    for (const service of services) {
      if (service.bgClass) {
        let hex = colorMappings[service.bgClass] || '#1a472a';
        // if bgClass includes a custom mapping logic from frontend, check it
        if (service.bgClass.includes('apc-green')) hex = '#1a472a';
        else if (service.bgClass.includes('apc-blue')) hex = '#1e3a8a';
        else if (service.bgClass.includes('apc-alert')) hex = '#ef4444';
        else if (service.bgClass.includes('emerald')) hex = '#10b981';
        else if (service.bgClass.includes('purple')) hex = '#9333ea';
        else if (service.bgClass.includes('teal')) hex = '#0d9488';
        else if (service.bgClass.includes('blue')) hex = '#2563eb';

        await connection.query('UPDATE services SET colorHex = ? WHERE id = ?', [hex, service.id]);
        updatedCount++;
      }
    }
    console.log(`${updatedCount} services mis à jour avec leurs couleurs hexadécimales.`);

    console.log("Exécution de la requête 3/3... (Suppression des anciennes colonnes)");
    try {
      await connection.query(`
        ALTER TABLE \`services\` 
        DROP COLUMN \`bgClass\`,
        DROP COLUMN \`accentClass\`;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (Les colonnes n'existent probablement plus)");
    }

    console.log("Migration terminée avec succès !");
  } catch (error) {
    console.error("Erreur générale lors de la migration:", error);
  } finally {
    await connection.end();
  }
}

migrate();
