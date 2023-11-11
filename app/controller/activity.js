const { ItineraryModel } = require("../../core/db/Itinerary");
const { isValidObjectId, handleError } = require("../../core/utils");
const { mgnaddactivityModel, mgnremoveactivityModel, mgneditactivityModel } = require("../model/activity");


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

const useraddactivityController = async (req, res, next) => {
  try {
    const { mgnid, activity } = req.body;
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
    const data = { mgnid, activity };
    let trainee = await mgnaddactivityModel(data, res);
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
const userremeoveactivityController = async (req, res, next) => {
  try {
    const { mgnid, activityid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(activityid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, activityid };
    let trainee = await mgnremoveactivityModel(data, res);
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
const usereditactivityController = async (req, res, next) => {
  try {
    const { mgnid, name , location , date, activityid } = req.body;
    const checkid = isValidObjectId(mgnid);
    const checkdestid = isValidObjectId(activityid);
    if (!checkid || !checkdestid) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "id is invalid type",

        error: "id is invalid type",
      });
    }
    await checkmgn(mgnid, res);
    const data = { mgnid, name , location , date,activityid };
    let trainee = await mgneditactivityModel(data, res);
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
  useraddactivityController,
  userremeoveactivityController,
  usereditactivityController,
};
