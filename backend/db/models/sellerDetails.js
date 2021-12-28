const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const seller = new mongoose.Schema({
  description: { type: String },
  price: { type: String },
  sellerId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("SellerDetails", seller);
