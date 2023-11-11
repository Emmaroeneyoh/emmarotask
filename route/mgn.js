const { createmgnController, updatemgnController, userretrievesinglemgnController, userretrieveusermgnController, userdeletemgnController, userretrieveallmgnController } = require("../app/controller/mgn");
const { user_check_token } = require("../core/authorization");
const { userValidation } = require("../core/validation/auth");
const { usercreatemgnValidation, userupdatemgnValidation, userretrievedeletemgnValidation } = require("../core/validation/mgn");

const router = require("express").Router();

router.post(
  "/create/mgn",
  user_check_token,
  usercreatemgnValidation,
  createmgnController
);

router.put(
  "/update/mgn",
  user_check_token,
  userupdatemgnValidation,
  updatemgnController
);
router.get(
  "/retrieve/single/mgn",
    user_check_token,
  userretrievedeletemgnValidation,
  userretrievesinglemgnController
);
router.delete(
  "/delete/mgn",
    user_check_token,
  userretrievedeletemgnValidation,
  userdeletemgnController
);
router.get(
    "/retrieve/all/mgn",
    userValidation,
    user_check_token,
  userretrieveallmgnController
);
router.get(
  "/retrieve/user/mgn",
    user_check_token,
    userValidation,
  userretrieveusermgnController
);
router.get(
  "/test",
    user_check_token,
    userValidation,
    (req, res) => {
        res.send('work')
 }
);

module.exports = router;
