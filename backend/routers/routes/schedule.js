  const express = require("express");
const auth = require("./../middlewares/authentication");
const buyerRouter = express.Router();

const {
  appoinmentSchedule,
  getAllAppoinmenet,
  changeStatus
} = require("./../controllers/schedule");

buyerRouter.post("/appoinment/schedule", auth, appoinmentSchedule);
buyerRouter.get("/appoinments", auth, getAllAppoinmenet);
buyerRouter.put("/appoinments/:id", auth, changeStatus);

module.exports = buyerRouter;
