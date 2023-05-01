const Joi = require("joi");

module.exports.createUserSchema = Joi.object().keys({
  userName: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports.loginUserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
