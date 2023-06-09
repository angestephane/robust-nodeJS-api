module.exports = {
  defaultServerMessage: {
    status: 400,
    message: "",
    body: {},
  },

  productMessage: {
    PRODUCT_CREATED: "Produit crée avec succès",
    PRODUCT_FETCHING: "Produits récupérés avec succès !",
    PRODUCT_NOT_FOUND: "Produit n'existe pas",
    PRODUCT_FETCHED: "produit récupéré avec succès !",
    PRODUCT_UPDATED: "produit mis à jour avec succès !",
    PRODUCT_DELETED: "produit supprimé avec succès !",
  },

  userMessage: {
    USER_CREATED: "Utilisateur crée avec succès",
    LOGIN_SUCCESS: "Utilisateur connecté avec succès",
    DUPLICATE_EMAIL: "Email déjà utilisé.",
    USER_NOT_FOUND: "Utilisateur n'existe pas",
    INVALID_PASSWORD: "Mot de passe invalide",
  },

  requestValidationMessage: {
    BAD_REQUEST: "Champ Invalide",
    TOKEN_MISSING: "Jeton manquant dans l'en-tête de la demande",
  },

  databaseMessage: {
    INVALID_ID: "Id invalide",
  },
};
