const scheduleModel = require("./../../db/models/schedule");

const appoinmentSchedule = (req, res) => {
  const { date, status, sellerId } = req.body;

  const buyerId = req.token.id;

  const schedule = new scheduleModel({
    date,
    status,
    sellerId,
    buyerId,
  });

  schedule
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getAllAppoinmenet = (req, res) => {
  const sellerId = req.token.id;
  scheduleModel
    .find({ sellerId: sellerId, status: "pendding" })
    .populate("buyerId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

const changeStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  scheduleModel
    .findOneAndUpdate({ _id: id }, { status: status })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  appoinmentSchedule,
  getAllAppoinmenet,
  changeStatus,
};
