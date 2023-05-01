const express = require("express");
const productController = require("../controller/productController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const validateToken = require("../middleware/validateToken");
const productSchema = require("../apiSchema/productSchema");

const router = express.Router();

router.post(
  "/", //uri=>/api/v1/product/  -> post
  validateToken.validateToken,
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
);

router.get(
  "/:id",
  validateToken.validateToken,
  productController.getProductById
);

router.get(
  "/",
  validateToken.validateToken,
  joiSchemaValidation.validateQuery(productSchema.getAllProductSchema),
  productController.getAllProduct
);

router.put(
  "/:id",
  validateToken.validateToken,
  joiSchemaValidation.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
);

router.delete(
  "/:id",
  validateToken.validateToken,
  productController.deleteProduct
);

module.exports = router;
