const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema(
  {
    name: String,
    contact: String,
    quantity: String,

  }
);
const DonorsModel = mongoose.model("donors", DonorSchema);
module.exports = DonorsModel;