const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log("connexion réussi");
  } catch (error) {
    console.log(`Désolé quelque chose  mal tourné : ${error}`);
  }
};
