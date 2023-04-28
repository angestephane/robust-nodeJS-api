const router = require("express").Router();

const userController = require("../controller/userController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const userSchema = require("../apiSchema/userSchema");

router.post(
  "/register",
  joiSchemaValidation.validateBody(userSchema.createUserSchema),
  userController.createUser
);

module.exports = router;
