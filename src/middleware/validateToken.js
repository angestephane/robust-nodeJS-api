const constants = require("../constants");
const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  const response = { ...constants.defaultServerMessage };

  try {
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
    }
    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY || "my-secret-key"
    );
    console.log("decoded", decoded);
    return next();
  } catch (e) {
    response.message = e.message;
    response.status = 401;
  }
  return res.status(response.status).send(response);
};
