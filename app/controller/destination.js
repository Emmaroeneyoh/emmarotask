const { ItineraryModel } = require("../../core/db/Itinerary");
const { isValidObjectId, handleError } = require("../../core/utils");
const {
  mgnadddestinationModel,
  mgnremovedestinationModel,
  mgneditdestinationModel,
} = require("../model/edit.mgn");

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

const useradddestinationController = async (req, res, next) => {
  try {
    const { mgnid, destination } = req.body;
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
    const data = { mgnid, destination };
    let trainee = await mgnadddestinationModel(data, res);
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
const userremeovedestinationController = async (req, res, next) => {
  try {
    const { mgnid, destinationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(destinationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, destinationid };
    let trainee = await mgnremovedestinationModel(data, res);
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
const usereditdestinationController = async (req, res, next) => {
  try {
    const { mgnid, arrivalDate, departureDate, city, country , destinationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(destinationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, arrivalDate, departureDate, city, country ,destinationid };
    let trainee = await mgneditdestinationModel(data, res);
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
  useradddestinationController,
  userremeovedestinationController,
  usereditdestinationController,
};
