const { Sequelize } = require('sequelize');
const path = require('path');

// On crée une instance Sequelize en précisant le dialecte SQLite
// et l'endroit où le fichier de la base de données sera créé/sauvegardé.
const sequelize = new Sequelize({
  dialect: 'sqlite',              // On utilise SQLite
  storage: path.join(__dirname, '..', 'database.sqlite'), // chemin vers le fichier BDD
  logging: console.log            // log des requêtes SQL dans le terminal (pratique pour débugger)
});

// On exporte l'instance sequelize pour la réutiliser partout dans l'app
module.exports = { sequelize };
