// On importe le modèle blague pour interagir avec la BDD
const Blague = require('../models/blague');

// Ajouter une nouvelle blague
exports.createBlague = async (req, res) => {
  try {
    const { texte } = req.body;

    // Vérifier que le texte est bien fourni
    if (!texte) {
      return res.status(400).json({ error: 'Le champ texte est obligatoire' });
    }

    // Créer la blague en base
    const nouvelleBlague = await Blague.create({ texte });

    // Retourner la blague créée avec statut 201 (créé)
    res.status(201).json(nouvelleBlague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les blagues
exports.getAllBlagues = async (req, res) => {
  try {
    const blagues = await Blague.findAll();
    res.json(blagues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une blague par son ID
exports.getBlagueById = async (req, res) => {
  try {
    const id = req.params.id;

    // Chercher la blague dans la BDD
    const blague = await Blague.findByPk(id);

    if (!blague) {
      return res.status(404).json({ error: `Blague avec l'id ${id} non trouvée` });
    }

    res.json(blague);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une blague aléatoire
exports.getRandomBlague = async (req, res) => {
  try {
    // Récupérer toutes les blagues
    const blagues = await Blague.findAll();

    if (blagues.length === 0) {
      return res.status(404).json({ error: 'Aucune blague disponible' });
    }

    // Choisir un index aléatoire
    const randomIndex = Math.floor(Math.random() * blagues.length);

    // Envoyer la blague aléatoire
    res.json(blagues[randomIndex]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

