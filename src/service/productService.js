const constants = require("../constants");
const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helper/dbHelper");

module.exports.createProduct = async (data) => {
  try {
    const product = new Product({ ...data });
    const result = await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log(
      `Désolé, une erreur lors de la création du product : ${error.message}`
    );
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    const produit = await Product.findById(id);
    if (!produit) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(produit);
  } catch (error) {
    console.log(
      `Désolé, une erreur lors de la récupération des product : ${error.message}`
    );
    throw new Error(error);
  }
};

module.exports.getAllProduct = async ({ skip = 0, limit = 4 }) => {
  try {
    const produits = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(produits);
  } catch (error) {
    console.log(
      `Désolé, une erreur lors de la récupération des product : ${error.message}`
    );
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, data }) => {
  try {
    checkObjectId(id);
    const produit = await Product.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!produit) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(produit);
  } catch (error) {
    console.log(
      `Désolé, une erreur lors de la récupération des product : ${error.message}`
    );
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    const produit = await Product.findByIdAndDelete(id);
    if (!produit) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(produit);
  } catch (error) {
    console.log(
      `Désolé, une erreur lors de la récupération des product : ${error.message}`
    );
    throw new Error(error);
  }
};
