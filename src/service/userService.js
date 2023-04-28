const constants = require("../constants");
const User = require("../database/models/userModel");
const { formatMongoData } = require("../helper/dbHelper");
const bcrypt = require("bcrypt");

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
