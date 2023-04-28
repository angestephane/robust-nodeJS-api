const express = require("express");
const productController = require("../controller/productController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");

const router = express.Router();

router.post(
  "/", //uri=>/api/v1/product/  -> post
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
);

router.get("/:id", productController.getProductById);

router.get(
  "/",
  joiSchemaValidation.validateQuery(productSchema.getAllProductSchema),
  productController.getAllProduct
);

router.put(
  "/:id",
  joiSchemaValidation.validateBody(productSchema.updateProductSchema),
  productController.updateProduct
);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
