const router = require("express").Router();

const userController = require("../controller/userController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const userSchema = require("../apiSchema/userSchema");

router.post(
  "/register",
  joiSchemaValidation.validateBody(userSchema.createUserSchema),
  userController.createUser
);

router.post(
  "/login",
  joiSchemaValidation.validateBody(userSchema.loginUserSchema),
  userController.loginUser
);

module.exports = router;
