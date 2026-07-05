const mysql = require('mysql2/promise');
const { v4: uuidv4 } = require('uuid');
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
    // 1. Create table career_types
    console.log("Exécution de la requête 1/5... (Création career_types)");
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`career_types\` (
        \`id\` varchar(36) NOT NULL,
        \`name\` varchar(255) NOT NULL,
        \`nameEn\` varchar(255) DEFAULT NULL,
        \`isActive\` tinyint(4) NOT NULL DEFAULT 1,
        \`order\` int(11) NOT NULL DEFAULT 0,
        \`createdAt\` datetime(6) NOT NULL DEFAULT current_timestamp(6),
        \`updatedAt\` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    `);
    console.log("Requête exécutée avec succès.");

    // 2. Insert default types
    console.log("Exécution de la requête 2/5... (Insertion des types par défaut)");
    const defaultTypes = [
      { name: 'CDI - Temps Plein', nameEn: 'Full-Time Contract', order: 1, key: 'FULL_TIME' },
      { name: 'CDD - Temps Partiel', nameEn: 'Part-Time Contract', order: 2, key: 'PART_TIME' },
      { name: 'Consultance / Prestataire', nameEn: 'Contractor', order: 3, key: 'CONTRACT' },
      { name: 'Stage', nameEn: 'Internship', order: 4, key: 'INTERNSHIP' },
      { name: 'Bénévolat / Volontariat', nameEn: 'Volunteer', order: 5, key: 'VOLUNTEER' }
    ];
    
    // Check if empty
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM career_types');
    if (rows[0].count === 0) {
      for (const t of defaultTypes) {
        t.id = uuidv4();
        await connection.query(
          'INSERT INTO career_types (id, name, nameEn, `order`) VALUES (?, ?, ?, ?)',
          [t.id, t.name, t.nameEn, t.order]
        );
      }
      console.log("Types par défaut insérés.");
    } else {
      console.log("La table career_types n'est pas vide, on saute l'insertion.");
    }

    // 3. Alter table careers to change `type` from enum to varchar
    console.log("Exécution de la requête 3/5... (Modification du champ type dans careers)");
    try {
      await connection.query(`
        ALTER TABLE \`careers\` 
        MODIFY COLUMN \`type\` varchar(255) DEFAULT NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (déjà modifié ou erreur mineure)", e.message);
    }

    // 4. Add careerTypeId column to careers
    console.log("Exécution de la requête 4/5... (Ajout de careerTypeId)");
    try {
      await connection.query(`
        ALTER TABLE \`careers\` 
        ADD COLUMN \`careerTypeId\` varchar(36) DEFAULT NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      console.log("[INFO] Ignoré (la colonne existe probablement déjà)");
    }

    // 5. Add foreign key
    console.log("Exécution de la requête 5/5... (Ajout de la clé étrangère)");
    try {
      await connection.query(`
        ALTER TABLE \`careers\` 
        ADD CONSTRAINT \`FK_career_type\` FOREIGN KEY (\`careerTypeId\`) REFERENCES \`career_types\` (\`id\`) ON DELETE SET NULL;
      `);
      console.log("Requête exécutée avec succès.");
    } catch (e) {
      if (e.errno === 1061 || e.errno === 121 || e.code === 'ER_DUP_KEYNAME' || e.code === 'ER_CANT_CREATE_TABLE') {
        console.log("[INFO] Ignoré (La clé étrangère existe probablement déjà)");
      } else {
        console.log("[WARNING]", e.message);
      }
    }

    // Optional: Migrate existing values if possible
    console.log("Migration des données existantes...");
    const [careers] = await connection.query('SELECT id, type FROM careers WHERE careerTypeId IS NULL AND type IS NOT NULL');
    const [typesDb] = await connection.query('SELECT id, name FROM career_types');
    
    // Simple mapping heuristics
    const mapping = {
      'FULL_TIME': 'CDI',
      'PART_TIME': 'CDD',
      'CONTRACT': 'Consultance',
      'INTERNSHIP': 'Stage',
      'VOLUNTEER': 'Bénévolat'
    };
    
    for (const career of careers) {
      const keyword = mapping[career.type] || career.type;
      const matchedType = typesDb.find(t => t.name.includes(keyword));
      if (matchedType) {
        await connection.query('UPDATE careers SET careerTypeId = ? WHERE id = ?', [matchedType.id, career.id]);
      }
    }

    console.log("Migration terminée avec succès !");

  } catch (error) {
    console.error("Erreur générale lors de la migration:", error);
  } finally {
    await connection.end();
  }
}

migrate();
