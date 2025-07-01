// Import de Sequelize (l'ORM)
const { Sequelize } = require('sequelize');

// Création d'une instance Sequelize connectée à une base SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',          // on utilise SQLite (fichier local)
  storage: './database.sqlite', // fichier qui contiendra la BDD
});

// On exporte la connexion pour l'utiliser dans les modèles
module.exports = sequelize;
