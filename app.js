// Import du framework Express
const express = require('express');
const app = express();

// Import du routeur gérant les routes liées aux blagues
const blaguesRouter = require('./routes/blagues');

// Pour pouvoir appeler le back depuis un autre navigateur
const cors = require('cors');
app.use(cors());

// Import de la connexion Sequelize pour la base de données
const { sequelize } = require('./models');

// Import le modèle
const Blague = require('./models/blague.js');

// Middleware pour analyser automatiquement les corps de requête JSON
app.use(express.json());

// Configuration de SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Carambar & Co API",
      version: "1.0.0",
      description: "API de blagues versionnée pour Carambar & co",
    },
    servers: [
      {
        url: "https://carambar-api-4ox1.onrender.com/api/v1", // adapte si déployé
      },
    ],
  },
  apis: ["./routes/blagues.js"], // Swagger lira les commentaires JSDoc dans tes fichiers de routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware pour servir la doc Swagger UI à l'URL /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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
