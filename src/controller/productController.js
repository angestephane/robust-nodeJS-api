const productService = require("../service/productService");
const constants = require("../constants");

module.exports.createProduct = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await productService.createProduct(req.body);
    response.status = 201;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = data;
  } catch (err) {
    response.status = 500;
    response.message = `Désolé, le produit n'est pas été crée, ${err.message}`;
  }

  res.status(response.status).send(response);
};

module.exports.getProductById = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await productService.getProductById({ id: req.params.id });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = data;
  } catch (err) {
    response.status = 500;
    response.message = `Désolé, le produit n'a pas pu être récupéré, ${err.message}`;
  }

  return res.status(response.status).send(response);
};

module.exports.getAllProduct = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await productService.getAllProduct(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHING;
    response.body = data;
  } catch (err) {
    response.status = 500;
    response.message = `Désolé, la data n'a pas pu être récupérée, ${err.message}`;
  }

  return res.status(response.status).send(response);
};

module.exports.updateProduct = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await productService.updateProduct({
      id: req.params.id,
      data: req.body,
    });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = data;
  } catch (err) {
    response.status = 500;
    response.message = `Désolé, le produit n'a pas pu être récupéré, ${err.message}`;
  }

  return res.status(response.status).send(response);
};

module.exports.deleteProduct = async (req, res) => {
  const response = { ...constants.defaultServerMessage };
  try {
    const data = await productService.deleteProduct({ id: req.params.id });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_DELETED;
    response.body = data;
  } catch (err) {
    response.status = 500;
    response.message = `Désolé, le produit n'a pas pu être récupéré, ${err.message}`;
  }

  return res.status(response.status).send(response);
};
