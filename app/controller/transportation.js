const { ItineraryModel } = require("../../core/db/Itinerary");
const { isValidObjectId, handleError } = require("../../core/utils");
const { mgnaddtransportationModel, mgnremovetransportationModel, mgnedittransportationModel } = require("../model/transportation");


const checkmgn = async (id, res) => {
  const checkmgn = await ItineraryModel.findById(id);
  if (!checkmgn) {
    return res.status(400).json({
      status_code: 400,
      status: false,
      message: "mgn does not exist",

      error: "mgn does not exist",
    });
  }
};

const useraddtransportationController = async (req, res, next) => {
  try {
    const { mgnid, transportation } = req.body;
    const checkid = isValidObjectId(mgnid);
    if (!checkid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, transportation };
    let trainee = await mgnaddtransportationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const userremeovetransportationController = async (req, res, next) => {
  try {
    const { mgnid, transportationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(transportationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, transportationid };
    let trainee = await mgnremovetransportationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const useredittransportationController = async (req, res, next) => {
  try {
    const { mgnid, mode , details ,departureDate , arrivalDate, transportationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(transportationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, mode , details ,departureDate , arrivalDate , transportationid };
    let trainee = await mgnedittransportationModel(data, res);
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

module.exports = {
  useraddtransportationController,
  userremeovetransportationController,
  useredittransportationController,
};
