const { ItineraryModel } = require("../../core/db/Itinerary");
const { isValidObjectId, handleError } = require("../../core/utils");
const { mgnaddaccomodationModel, mgnremoveaccomodationModel, mgneditaccomodationModel } = require("../model/accomdation");
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

const useraddaccomodationController = async (req, res, next) => {
  try {
    const { mgnid, accomodation } = req.body;
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
    const data = { mgnid, accomodation };
    let trainee = await mgnaddaccomodationModel(data, res);
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
const userremeoveaccomodationController = async (req, res, next) => {
  try {
    const { mgnid, accomodationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(accomodationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, accomodationid };
    let trainee = await mgnremoveaccomodationModel(data, res);
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
const usereditaccomodationController = async (req, res, next) => {
  try {
    const { mgnid,   name , checkInDate , checkoutDate , address,  accomodationid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(accomodationid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid,   name , checkInDate , checkoutDate , address, accomodationid };
    let trainee = await mgneditaccomodationModel(data, res);
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
  useraddaccomodationController,
  userremeoveaccomodationController,
  usereditaccomodationController,
};
