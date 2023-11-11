const { userretrieveprofileController, userupdatepasswordController, userupdateprofileController } = require("../app/controller/profile");
const { user_check_token } = require("../core/authorization");
const { userValidation } = require("../core/validation/auth");
const { userupdatepasswordValidation, userupdateprofileValidation } = require("../core/validation/profile");

const router = require("express").Router();

router.get(
  "/retrieve/profile",
  userValidation,
  user_check_token,
  userretrieveprofileController
);
router.put(
  "/update/password",
  userupdatepasswordValidation,
  user_check_token,
  userupdatepasswordController
);
router.put(
  "/update/profile",
  userupdateprofileValidation,
  user_check_token,
  userupdateprofileController
);

module.exports = router;
