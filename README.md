# carambar-api

Bienvenue sur l’API de blagues Carambar & Co ! 🎉

Cette API REST permet de gérer des blagues Carambar via une base de données SQLite, avec 4 endpoints :
- Créer une blague (POST)
- Consulter toutes les blagues (GET)
- Consulter une blague par son ID (GET)
- Consulter une blague aléatoire (GET)

## 📌 Lien vers l’API déployée
👉 [Accéder à l’API sur Render](https://carambar-api-4ox1.onrender.com/api/v1/blagues)

## 📌 Documentation Swagger
👉 [Accéder à SWAGGER](https://carambar-api-4ox1.onrender.com/api-docs)

## 📦 Technologies utilisées
### Back-end

- Node.js : Environnement d’exécution JavaScript côté serveur, rapide et léger, idéal pour développer des APIs.

- Express : Framework minimaliste pour Node, utilisé ici pour structurer l’API et gérer les routes.

- Sequelize : ORM (Object-Relational Mapping) permettant de manipuler la base de données avec des objets JavaScript, facilitant la lecture et l’écriture en BDD.

- SQLite : Base de données légère, stockée sous forme de fichier, parfaite pour une petite application comme celle-ci.

### Documentation

- Swagger (OpenAPI) : Outil permettant de documenter et tester facilement l’API via une interface web conviviale. L’API est versionnée et exposée avec Swagger, ce qui simplifie la compréhension et l’intégration future.

## 🚀 Installation locale

```bash
git clone https://github.com/Tougazak/carambar-api.git
cd carambar-api
npm install
