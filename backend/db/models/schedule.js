const mongoose = require("mongoose");

const schedule = new mongoose.Schema({
  date: { type: String, required: true },
  status: { type: String, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Schedule", schedule);
