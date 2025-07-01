// Import d'Express pour créer un routeur
const express = require('express');
const router = express.Router();

// Import du contrôleur avec les fonctions métier
const blagueController = require('../controllers/blagueController');

// Route POST pour créer une nouvelle blague
router.post('/blagues', blagueController.createBlague);

// Route GET pour récupérer toutes les blagues
router.get('/blagues', blagueController.getAllBlagues);

// Route GET pour récupérer une blague par son id
router.get('/blagues/:id', blagueController.getBlagueById);

// Route GET pour récupérer une blague aléatoire
router.get('/blagues/random', blagueController.getRandomBlague);

// Export du routeur pour l'utiliser dans app.js
module.exports = router;
