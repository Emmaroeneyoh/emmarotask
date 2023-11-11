const joi = require("joi");
const { handleError } = require("../utils");

const useradddestinationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    destination: joi.object().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const userremovedestinationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    destinationid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const usereditdestinationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    destinationid: joi.string().required(),
    country: joi.string().required(),
    city: joi.string().required(),
    departureDate: joi.string().required(),
    arrivalDate: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};


const useraddactivityValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    activity: joi.object().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const userremoveactivityValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    activityid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const usereditactivityValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    activityid: joi.string().required(),
    name: joi.string().required(),
    date: joi.string().required(),
    location: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};


const useraddtransportationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    transportation: joi.object().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const userremovetransportationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    transportationid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};

const useredittransportationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    transportationid: joi.string().required(),
    mode: joi.string().required(),
    details: joi.string().required(),
    departureDate: joi.string().required(),
    arrivalDate: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};

const useraddaccomodationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    accomodation: joi.object().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const userremoveaccomodationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    accomodationid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};

const usereditaccomodationValidation = (req, res, next) => {
  const schema = joi.object({
    userid: joi.string().required(),
    mgnid: joi.string().required(),
    accomodationid: joi.string().required(),
    name: joi.string().required(),
    address: joi.string().required(),
    checkInDate: joi.string().required(),
    checkoutDate: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};

module.exports = {
  usereditdestinationValidation,
  userremovedestinationValidation,
  useradddestinationValidation,
  useredittransportationValidation,
  userremovetransportationValidation,
  useraddtransportationValidation,
  usereditactivityValidation,
  userremoveactivityValidation,
  useraddactivityValidation,
  usereditaccomodationValidation,
  userremoveaccomodationValidation,
  useraddaccomodationValidation,
};
