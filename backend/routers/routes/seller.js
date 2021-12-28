const express = require("express");

const sellerRouter = express.Router();
const auth = require("./../middlewares/authentication");
const {
  getAllSeller,
  getSellerByName,
  getSellerById,
  addSellerDeitels,
} = require("../controllers/seller");

sellerRouter.get("/seller", getAllSeller);
sellerRouter.get("/seller/search", getSellerByName);
sellerRouter.get("/seller/:id", getSellerById);
sellerRouter.post("/seller", auth, addSellerDeitels);

module.exports = sellerRouter;
