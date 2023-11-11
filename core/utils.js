const base_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const userjwt = process.env.userJWT;
const userpasswordjwt = process.env.userpasswordjwt;
const adminJWT = process.env.adminJWT;
const adminpasswordjwt = process.env.adminpasswordjwt;
const appPassword = process.env.appPassword;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const coonectdb =  () => {
  mongoose.set("strictQuery", false);
   mongoose
    .connect(base_url)
    .then((result) => console.log("base connetced"))
    .catch((err) => console.log(err));
};

const age = 1 * 24 * 60 * 60;
const create_user_token = (user) => {
  return jwt.sign({ user }, userjwt, {
    expiresIn: age,
  });
};

const handleError = (err) => (res) => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}

 function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
  
}

module.exports = {
  base_url,
  PORT,
  userjwt,
  userpasswordjwt,
  adminJWT,
  adminpasswordjwt,
  appPassword,
  coonectdb,
  handleError,
  create_user_token,
  isValidObjectId,
};
