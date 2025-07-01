// Import de Sequelize
const { Sequelize } = require('sequelize');

// Création d'une instance Sequelize configurée pour utiliser SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',             // Utilisation de SQLite comme base de données
  storage: 'database.sqlite',    // Le fichier où la base SQLite sera stockée
  logging: false,                // On désactive les logs SQL pour ne pas polluer la console
});

// On exporte cette instance pour pouvoir la réutiliser dans d'autres fichiers
module.exports = { sequelize };

