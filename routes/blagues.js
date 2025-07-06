// Import d'Express pour créer un routeur
const express = require('express');
const router = express.Router();

// Import du contrôleur avec les fonctions métier
const blagueController = require('../controllers/blagueController');

// Route POST pour créer une nouvelle blague
/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags:
 *       - Blagues
 *     requestBody:
 *       description: Blague à ajouter
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texte
 *             properties:
 *               texte:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *       400:
 *         description: Requête invalide
 */

router.post('/blagues', blagueController.createBlague);

// Route GET pour récupérer toutes les blagues
/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   texte:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/blagues', blagueController.getAllBlagues);

// Route GET pour récupérer une blague aléatoire
/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 texte:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Aucune blague disponible
 */
router.get('/blagues/random', blagueController.getRandomBlague);

// Route GET pour récupérer une blague par son id
/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Une blague correspondant à l’ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 texte:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Blague non trouvée
 */
router.get('/blagues/:id', blagueController.getBlagueById);

// Export du routeur pour l'utiliser dans app.js
module.exports = router;
