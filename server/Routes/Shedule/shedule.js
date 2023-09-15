const mongoose = require("mongoose");

const SheduleSchema = new mongoose.Schema({
  date: String,
  timeslot1: String,
  workername1: String,
  workingarea1: String,
  timeslot2: String,
  workername2: String,
  workingarea2: String,
  offtime: String,
});

const SheduleModel = mongoose.model("shedule", SheduleSchema);
module.exports = SheduleModel;
