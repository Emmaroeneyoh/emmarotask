const express = require("express");
//using the env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");
const { coonectdb, base_url } = require("./core/utils");
const app = express();
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit');


const userauth = require('./route/auth')
const userprofile = require('./route/profile')
const usermgn = require('./route/mgn')
const usereditmgn = require('./route/edit.mgn')

mongoose
.connect(base_url)
// coonectdb()

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
  
  // Apply rate limiter middleware globally
  app.use(limiter);
  
app.use(cors());
//applying our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const user = '/user'
app.use(user , userauth)
app.use(user , userprofile)
app.use(user , usermgn)
app.use(user , usereditmgn)


//error handler
app.use((req, res, next) => {
  const error = new Error("api not found");
  error.status = 404;
  res.status(404).json({
    status_code: 404,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.status(500).json({
    status_code: 500,
    status: false,
    message: error.message,
    data: [],
    error: error.message,
  });
});

const port =  3000;
app.listen(port, () => {
  console.log("server connected", port);
});

module.exports = app