const Joi = require("joi");

module.exports.createProductSchema = Joi.object().keys({
  nom: Joi.string().min(5).required(),
  prix: Joi.number().required(),
  marque: Joi.string().required(),
});

module.exports.getAllProductSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
});

module.exports.updateProductSchema = Joi.object().keys({
  nom: Joi.string().min(5),
  prix: Joi.number(),
  marque: Joi.string(),
});
