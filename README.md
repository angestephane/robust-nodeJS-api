# NodeJS Robuste API

NodeJS robuste API est un boilerplate pour la conception des API RESTfull. Cette API repose sur une architecture totalement maintenable et réutilisable.

## Tech Stack

**Server:**

- [![NodeJS](https://img.shields.io/badge/Node-NodeJS-green.svg)](https://nodejs.org/en/docs)
- [![ExpressJS](https://img.shields.io/badge/Express-ExpressJS-red.svg)](https://expressjs.com/)

**Database:**

- [![Mongoose](https://img.shields.io/badge/Mongoose-MongooseJS-critical.svg)](https://mongoosejs.com/)
- [![MongoDB](https://img.shields.io/badge/-MongoDB-lightgrey.svg)](https://www.mongodb.com/)

**Schema & validation des requêtes:**

- [![Joi](https://img.shields.io/badge/-Joi-informational.svg)](https://joi.dev/api/?v=17.9.1)

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

## Feedback

Je serai ravi d'avoir vos remarques et avis sur un point particulier de l'API.

## License

[MIT](https://choosealicense.com/licenses/mit/)
