const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("User", userSchema);
