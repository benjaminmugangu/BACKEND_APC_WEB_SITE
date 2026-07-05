require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '3306')
});

const queries = [
  // 1. Créer la table departments
  `CREATE TABLE IF NOT EXISTS departments (
    id VARCHAR(36) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NULL,
    \`order\` INT NOT NULL DEFAULT 0,
    isActive TINYINT(1) NOT NULL DEFAULT 1,
    createdAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    updatedAt DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
  )`,
  
  // 2. Ajouter le champ departmentId à la table team_members s'il n'existe pas
  `ALTER TABLE team_members ADD COLUMN IF NOT EXISTS departmentId VARCHAR(36) NULL`,
  
  // 3. Ajouter la contrainte de clé étrangère s'il n'existe pas déjà
  `ALTER TABLE team_members ADD CONSTRAINT fk_team_member_department FOREIGN KEY (departmentId) REFERENCES departments(id) ON DELETE SET NULL`
];

let queryIndex = 0;

function executeNext() {
  if (queryIndex >= queries.length) {
    console.log("Migration réussie avec succès !");
    connection.end();
    return;
  }

  const query = queries[queryIndex];
  console.log(`Exécution de la requête ${queryIndex + 1}/${queries.length}...`);
  
  connection.query(query, (err, results) => {
    if (err) {
      // Si la contrainte ou colonne existe déjà, on l'ignore
      if (
        err.code === 'ER_DUP_KEYNAME' || 
        err.code === 'ER_FK_DUP_NAME' || 
        err.code === 'ER_CANT_CREATE_TABLE' ||
        err.message.includes('Duplicate key') || 
        err.message.includes('already exists')
      ) {
        console.log(`[INFO] Ignoré (déjà existant ou déjà configuré) : ${err.message}`);
        queryIndex++;
        executeNext();
        return;
      }
      console.error(`Erreur lors de l'exécution de la requête :`, err);
      connection.end();
      process.exit(1);
    }
    console.log("Requête exécutée avec succès.");
    queryIndex++;
    executeNext();
  });
}

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    process.exit(1);
  }
  console.log("Connexion à la base de données établie.");
  executeNext();
});
