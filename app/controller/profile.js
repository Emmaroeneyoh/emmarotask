const { UserModel } = require("../../core/db/user");
const bcrypt = require("bcryptjs");
const { userupdateprofileModel, userUpdatepasswordModel, userretrieveprofileModel } = require("../model/profile");
const { handleError, isValidObjectId } = require("../../core/utils");


const userretrieveprofileController = async (req, res, next) => {
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
      const data = { userid };
      let trainee = await userretrieveprofileModel(data, res);
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
  
const userupdatepasswordController  = async (req, res, next) => {
    const { userid, currentpassword, newpassword } = req.body;
    try {
        const checkid = isValidObjectId(userid)
        if (!checkid) {
            return res.status(400).json({
                      status_code: 400,
                      status: false,
                      message: "id is invalid type",
                  
                      error: "id is invalid type",
                    });
        }
      const userDetails = await UserModel.findById(userid);
      if (!userDetails) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "user dont exist on our application",
          data: [],
          error: "user dont exist on our application",
        });
      }
  
      const checkPassword = await bcrypt.compare(
        currentpassword,
        userDetails.password
      );
      if (!checkPassword) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "incorrect password",
          data: [],
          error: "incorrect password",
        });
      }
      const salt = await bcrypt.genSalt();
      const Harshpassword = await bcrypt.hash(newpassword, salt);
      const data = {
        userid,
        Harshpassword,
      };
  
      let trainee = await userUpdatepasswordModel(data, res);
  
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
  
const userupdateprofileController = async (req, res, next) => {
    const { name, email , userid } = req.body;
    const useremail = email.toLowerCase();
    try {
        const checkid = isValidObjectId(userid)
        if (!checkid) {
            return res.status(400).json({
                      status_code: 400,
                      status: false,
                      message: "id is invalid type",
                  
                      error: "id is invalid type",
                    });
        }
      const user = await UserModel.findOne({ email: useremail });
      const personid = user._id.toHexString();
        if (user) {
          if (personid !== userid) {
              return res.status(400).json({
                status_code: 400,
                status: false,
                message: "email already existed",
                data: [],
                error: "email already existed",
              });
            }
      }
  
      const data = {
        name, email , userid 
      };
  
      let trainee = await userupdateprofileModel(data, res);
  
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
    userretrieveprofileController , userupdateprofileController , userupdatepasswordController
}