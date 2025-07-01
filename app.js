// Import du framework Express
const express = require('express');
const app = express();

// Import du routeur gérant les routes liées aux blagues
const blaguesRouter = require('./routes/blagues');

// Import de la connexion Sequelize pour la base de données
const { sequelize } = require('./models');

// Middleware pour analyser automatiquement les corps de requête JSON
app.use(express.json());

// Toutes les routes qui commencent par /api/v1 seront gérées par blaguesRouter
app.use('/api/v1', blaguesRouter);

// Choix du port sur lequel le serveur va écouter (3000 par défaut)
const PORT = process.env.PORT || 3000;

// Synchronisation de la base de données avant de démarrer le serveur
// Cette opération crée la table Blagues si elle n'existe pas encore
sequelize.sync()
  .then(() => {
    console.log("Base de données synchronisée !");
    // Une fois la base prête, on démarre le serveur HTTP
    app.listen(PORT, () => {
      console.log(`API démarrée sur le port ${PORT}`);
    });
  })
  .catch(err => {
    // Si la synchronisation échoue, on log l'erreur
    console.error("Erreur de synchronisation :", err);
  });

// Un petit log de fin de script (normalement jamais atteint avant écoute serveur)
console.log("Fin du script app.js");
