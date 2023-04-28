const constant = require("../constants");

const validateObjectSchema = (data, schema) => {
  const { error, value } = schema.validate(data, { convert: false });

  if (typeof error === "undefined") {
    return null;
  } else {
    const getErrorData = error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return getErrorData;
  }
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    const response = { ...constant.defaultServerMessage };
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      response.message = constant.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    next();
  };
};

module.exports.validateQuery = (schema) => {
  return (req, res, next) => {
    const response = { ...constant.defaultServerMessage };
    const error = validateObjectSchema(req.query, schema);
    if (error) {
      response.body = error;
      response.message = constant.requestValidationMessage.BAD_REQUEST;
      return res.status(response.status).send(response);
    }
    next();
  };
};
