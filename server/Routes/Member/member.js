const mongoose = require("mongoose");

const schemaData = mongoose.Schema({
  name: String,
  member_id: String,
  mobile_no: String,
});

const userModel = mongoose.model("user", schemaData);
module.exports = userModel;
