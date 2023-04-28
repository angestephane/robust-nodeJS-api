const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    nom: String,
    prix: Number,
    marque: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
