const { ItineraryModel } = require("../../core/db/Itinerary");
const { isValidObjectId, handleError } = require("../../core/utils");
const { createmgnModel, updatemgnModel } = require("../model/mgn");

const createmgnController = async (req, res, next) => {
  const {
    name,
    userid,
    start,
    end,
    destination,
    activities,
    transportation,
    accomodation,
  } = req.body;
  const mgnname = name.toLowerCase();
  try {
    const mgn = await ItineraryModel.findOne({ name: mgnname });
    if (mgn) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "itinerary already existed",
        data: [],
        error: "itinerary already existed",
      });
    }

    const data = {
      userid,
      start,
      end,
      destination,
      activities,
      transportation,
      accomodation,
      mgnname,
    };
    console.log("setp2");
    let trainee = await createmgnModel(data, res);

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

const updatemgnController = async (req, res, next) => {
  const {
    name,
    userid,
    start,
    end,
  
    mgnid,
  } = req.body;
    const mgnname = name.toLowerCase();
    const checkid = isValidObjectId(userid)
    const checkmgnid = isValidObjectId(mgnid)
    if (!checkid || !checkmgnid) {
        return res.status(400).json({
                  status_code: 400,
                  status: false,
                  message: "id is invalid type",
              
                  error: "id is invalid type",
                });
    }
  try {
    const mgn = await ItineraryModel.findOne({ name: mgnname });
    
      if (mgn) {
        const checkid = mgn._id.toHexString();
      if (checkid !== mgnid) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "Itinerary already existed",
          data: [],
          error: "Itinerary already existed",
        });
      }
    }

    const data = {
      userid,
      start,
      end,
      mgnid,
      mgnname,
    };

    let trainee = await updatemgnModel(data, res);

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

const userretrievesinglemgnController = async (req, res, next) => {
  try {
      const { mgnid } = req.body;
      const checkid = isValidObjectId(mgnid)
      if (!checkid) {
          return res.status(400).json({
                    status_code: 400,
                    status: false,
                    message: "id is invalid type",
                
                    error: "id is invalid type",
                  });
      }
    let trainee = await ItineraryModel.findById(mgnid);
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
const userretrieveusermgnController = async (req, res, next) => {
  try {
      const { userid } = req.body;
      const checkid = isValidObjectId(userid)
      if (!checkid) {
          return res.status(400).json({
                    status_code: 400,
                    status: false,
                    message: "id is invalid type",
                
                    error: "id is invalid type",
                  });
      }
    let trainee = await ItineraryModel.find({ user: userid });
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
const userretrieveallmgnController = async (req, res, next) => {
  try {
    let trainee = await ItineraryModel.find();
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
const userdeletemgnController = async (req, res, next) => {
  try {
      const { mgnid } = req.body;
      const checkid = isValidObjectId(mgnid)
      if (!checkid) {
          return res.status(400).json({
                    status_code: 400,
                    status: false,
                    message: "id is invalid type",
                
                    error: "id is invalid type",
                  });
      }
    let trainee = await ItineraryModel.findByIdAndDelete(mgnid);
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
  userdeletemgnController,
  userretrieveallmgnController,
  userretrieveusermgnController,
  userretrievesinglemgnController,
  updatemgnController, createmgnController
};
