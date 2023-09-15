const mongoose = require("mongoose");

const LibLabSchema = new mongoose.Schema({
  name: String,
  position: String,
  member_id: String,
  mobile_no: String,
});
const LibLabModel = mongoose.model("liblab", LibLabSchema);
module.exports = LibLabModel;
