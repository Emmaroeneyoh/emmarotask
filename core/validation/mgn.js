

const joi = require('joi');
const { handleError } = require('../utils');


const usercreatemgnValidation = (req, res, next) => {
    const schema = joi.object({
      userid: joi.string().required(),
      name: joi.string().required(),
      start: joi.string().required(),
      end: joi.string().required(),
      destination: joi.array().required(),
      transportation: joi.array().required(),
      activities: joi.array().required(),
      accomodation: joi.array().required(),
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
const userupdatemgnValidation = (req, res, next) => {
    const schema = joi.object({
      userid: joi.string().required(),
      mgnid: joi.string().required(),
      name: joi.string().required(),
      start: joi.string().required(),
      end: joi.string().required(),
     
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
const userretrievedeletemgnValidation = (req, res, next) => {
    const schema = joi.object({
      userid: joi.string().required(),
      mgnid: joi.string().required(),
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
    usercreatemgnValidation , userretrievedeletemgnValidation ,   userupdatemgnValidation 
}