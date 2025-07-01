// On importe les types de données de Sequelize
const { DataTypes } = require('sequelize');

// On récupère la connexion à la base de données
const sequelize = require('../config/database');

// On définit un modèle "Blague" avec Sequelize
const Blague = sequelize.define('Blague', {
  // La colonne "texte" va contenir la blague en texte simple
  texte: {
    type: DataTypes.STRING,  // type string (texte court)
    allowNull: false,        // obligatoire, ne peut pas être vide
  },
});

// On exporte ce modèle pour pouvoir l'utiliser ailleurs dans le projet
module.exports = Blague;
