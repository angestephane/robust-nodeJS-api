# NodeJS Robuste API

NodeJS robuste API est un boilerplate pour la conception des API RESTfull. Cette API repose sur une architecture totalement maintenable et réutilisable.

## Les fonctionnalités complètes de cet exemple de projet écrit en NodeJS

- Créer un projet
- Lister tous les produits avec une option de pagination
- Obtenir un produit spécifique à partir de son ID
- Modifier un produit
- Supprimer un produit
- Créer un admin
- Connecter un admin en utilisant JWT
- Documentation de l'API avec Swagger.

## Tech Stack

**Server:**

- [![NodeJS](https://img.shields.io/badge/Node-NodeJS-green.svg)](https://nodejs.org/en/docs)
- [![ExpressJS](https://img.shields.io/badge/Express-ExpressJS-red.svg)](https://expressjs.com/)

**Database:**

- [![Mongoose](https://img.shields.io/badge/Mongoose-MongooseJS-critical.svg)](https://mongoosejs.com/)
- [![MongoDB](https://img.shields.io/badge/-MongoDB-lightgrey.svg)](https://www.mongodb.com/)

**Schema & validation des requêtes:**

- [![Joi](https://img.shields.io/badge/-Joi-informational.svg)](https://joi.dev/api/?v=17.9.1)

**Documentation:**

- [![Swagger](https://img.shields.io/badge/Swagger-documentation-green)](https://swagger.io)

## Installation

Vous devez disposer de NodeJS && npm installé sur votre machine

1. Cloner ou télécharger le projet. Si vous décidez de cloner le projet exécutez les commandes en dessous, dans un dossier créer préalablement.

```bash
git clone https://github.com/angestephane/robust-nodeJS-api.git .
```

2. Installer les dépendances

```bash
npm install
```

3. Exécution

```bash
npm run dev
```

## Utilisation

Dans un fichier .env que vous allez créer :

1. Ajoutez les variables d'environnement pour la connexion à la base de données : `DB_URL`

2. Définissez un port d'accès au server, sinon le port par défaut sera 3000 : `PORT`

3. Explorer le code et modifier les schemas et modèles en fonction de vos besoins. L'API s'adaptera.

### Documentation

L'API présenté dans ce projet à été document avec Swagger.
**_Cette documentation est accessible uniquement en mode dev_**
Pour consulter la documentation :

1. exécuter le projet :

```bash
npm run dev
```

2. Vous vous rendez ensuite sur : `http://localhost:3002/api-docs/`

## Feedback

Je serai ravi d'avoir vos remarques et avis sur un point particulier de l'API.

## License

[MIT](https://choosealicense.com/licenses/mit/)
