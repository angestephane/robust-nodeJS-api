const constants = require("../constants");
const userService = require("../service/userService");

module.exports.createUser = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await userService.createUser(req.body);
    response.status = 201;
    response.message = constants.userMessage.USER_CREATED;
    response.body = data;
  } catch (err) {
    response.status = 400;
    response.message = `Désolé, l'utilisateur n'est pas été crée, ${err.message}`;
  }
  return res.status(response.status).send(response);
};

module.exports.loginUser = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await userService.loginUser(req.body);
    response.status = 201;
    response.message = constants.userMessage.LOGIN_SUCCESS;
    response.body = data;
  } catch (err) {
    response.status = 400;
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};
