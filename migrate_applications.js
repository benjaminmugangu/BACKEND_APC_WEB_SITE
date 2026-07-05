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
    // 1. Change type from ENUM to VARCHAR
    console.log("Exécution de la requête 1/3... (Modification de type)");
    try {
      await connection.query(`
        ALTER TABLE \`applications\` 
        MODIFY COLUMN \`type\` varchar(255) DEFAULT NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (déjà modifié ou erreur mineure)", e.message);
    }

    // 2. Add careerTypeId
    console.log("Exécution de la requête 2/3... (Ajout de careerTypeId)");
    try {
      await connection.query(`
        ALTER TABLE \`applications\` 
        ADD COLUMN \`careerTypeId\` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (la colonne existe probablement déjà)");
    }

    // 3. Add foreign key
    console.log("Exécution de la requête 3/3... (Ajout de la clé étrangère)");
    try {
      await connection.query(`
        ALTER TABLE \`applications\` 
        ADD CONSTRAINT \`FK_app_career_type\` FOREIGN KEY (\`careerTypeId\`) REFERENCES \`career_types\` (\`id\`) ON DELETE SET NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      if (e.errno === 1061 || e.errno === 121 || e.code === 'ER_DUP_KEYNAME') {
        console.log("[INFO] Ignoré (La clé étrangère existe probablement déjà)");
      } else {
        console.log("[WARNING]", e.message);
      }
    }

    console.log("Migration des données existantes...");
    const [apps] = await connection.query('SELECT id, type FROM applications WHERE careerTypeId IS NULL AND type IS NOT NULL');
    const [typesDb] = await connection.query('SELECT id, name FROM career_types');
    
    // Mapping: volunteer, internship, job, consultant
    const mapping = {
      'job': 'CDI', // or similar
      'consultant': 'Consultance',
      'internship': 'Stage',
      'volunteer': 'Bénévolat'
    };
    
    let updatedCount = 0;
    for (const app of apps) {
      const keyword = mapping[app.type] || app.type;
      const matchedType = typesDb.find(t => t.name.includes(keyword));
      if (matchedType) {
        await connection.query('UPDATE applications SET careerTypeId = ? WHERE id = ?', [matchedType.id, app.id]);
        updatedCount++;
      }
    }

    console.log(`Migration terminée avec succès ! (${updatedCount} candidatures mises à jour)`);

  } catch (error) {
    console.error("Erreur générale lors de la migration:", error);
  } finally {
    await connection.end();
  }
}

migrate();
