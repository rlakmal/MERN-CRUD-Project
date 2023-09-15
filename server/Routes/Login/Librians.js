const mongoose = require("mongoose");

const LibriansSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: "librains",
  }
);

const LibriansModel = mongoose.model("Librains", LibriansSchema);
module.exports = LibriansModel;
