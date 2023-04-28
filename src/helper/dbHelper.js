const mongoose = require("mongoose");
const constants = require("../constants");

module.exports.formatMongoData = (data) => {
  const newData = [];
  if (Array.isArray(data)) {
    data.map((value) => {
      newData.push(value.toObject());
    });
    return newData;
  }
  return data.toObject();
};

module.exports.checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databaseMessage.INVALID_ID);
  }
};
