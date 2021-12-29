const sellerModel = require("../../db/models/user");
const sellerSchema = require("./../../db/models/sellerDetails");
const getAllSeller = (req, res) => {
  sellerModel
    .find({ role: "seller" })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const getSellerByName = (req, res) => {
  const fullName = req.query.fullName;
  if (!fullName) return res.status(404).json("not found");

  sellerModel
    .find({ fullName })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getSellerById = (req, res) => {
  const id = req.params.id;
  sellerSchema
    .findOne({ sellerId: id })
    .populate("sellerId")
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
};

const addSellerDeitels = (req, res) => {
  const sellerId = req.token.id;
  const { description, price } = req.body;
  const user = new sellerSchema({
    description,
    price,
    sellerId,
  });

  user.save().then((result) => {
    res.status(201).json(result);
  });
};

module.exports = {
  getAllSeller,
  getSellerByName,
  getSellerById,
  addSellerDeitels,
};
