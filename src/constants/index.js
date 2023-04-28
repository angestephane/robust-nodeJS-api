module.exports = {
  defaultServerMessage: {
    status: 400,
    message: "",
    body: {},
  },

  productMessage: {
    PRODUCT_CREATED: "Produit crée avec succès",
    PRODUCT_FETCHING: "Produit récupéré avec succès",
    PRODUCT_NOT_FOUND: "Produit n'existe pas",
    PRODUCT_FETCHED: "produit récupéré avec succès !",
    PRODUCT_UPDATED: "produit mis à jour avec succès !",
    PRODUCT_DELETED: "produit supprimé avec succès !",
  },

  userMessage: {
    USER_CREATED: "Utilisateur crée avec succès",
    DUPLICATE_EMAIL: "Email déjà utilisé.",
  },

  requestValidationMessage: {
    BAD_REQUEST: "Champ Invalide",
  },

  databaseMessage: {
    INVALID_ID: "Id invalide",
  },
};
