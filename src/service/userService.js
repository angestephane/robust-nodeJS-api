const constants = require("../constants");
const User = require("../database/models/userModel");
const { formatMongoData } = require("../helper/dbHelper");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.createUser = async ({ userName, email, password }) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    password = await bcrypt.hash(password, 10);

    const newUser = new User({ userName, email, password });
    const result = await newUser.save();
    return formatMongoData(result);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) throw new Error(constants.userMessage.USER_NOT_FOUND);
    const isOk = await bcrypt.compare(password, user.password);
    if (!isOk) throw new Error(constants.userMessage.INVALID_PASSWORD);
    const token = jwt.sign(
      { id: user.id },
      process.env.SECRET_KEY || "my-secret-key",
      { expiresIn: "1d" }
    );
    return { token };
  } catch (err) {
    throw new Error(err);
  }
};
