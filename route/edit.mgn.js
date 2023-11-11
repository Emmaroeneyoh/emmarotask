
const { usereditaccomodationController, useraddaccomodationController, userremeoveaccomodationController } = require("../app/controller/accomodation");
const {
  useraddactivityController,
  userremeoveactivityController,
  usereditactivityController,
} = require("../app/controller/activity");
const {
  useradddestinationController,
  usereditdestinationController,
  userremeovedestinationController,
} = require("../app/controller/destination");
const {
  useraddtransportationController,
  userremeovetransportationController,
  useredittransportationController,
} = require("../app/controller/transportation");
const { user_check_token } = require("../core/authorization");
const {
  usereditdestinationValidation,
  useradddestinationValidation,
  userremovedestinationValidation,
  useraddactivityValidation,
  userremoveactivityValidation,
  usereditactivityValidation,
  useraddtransportationValidation,
  userremovetransportationValidation,
  useredittransportationValidation,
  useraddaccomodationValidation,
  userremoveaccomodationValidation,
  usereditaccomodationValidation,
} = require("../core/validation/edit.mgn");

const router = require("express").Router();

//for destination
router.post(
  "/add/destination",
  user_check_token,
  useradddestinationValidation,
  useradddestinationController
);
router.post(
  "/edit/destination",
  user_check_token,
  usereditdestinationValidation,
  usereditdestinationController
);
router.post(
  "/remove/destination",
  user_check_token,
  userremovedestinationValidation,
  userremeovedestinationController
);

//for destination
router.post(
  "/add/activity",
  user_check_token,
  useraddactivityValidation,
  useraddactivityController
);
router.post(
  "/remove/activity",
  user_check_token,
  userremoveactivityValidation,
  userremeoveactivityController
);
router.post(
  "/edit/activity",
  user_check_token,
  usereditactivityValidation,
  usereditactivityController
);

//for destination
router.post(
  "/add/transportation",
  user_check_token,
  useraddtransportationValidation,
  useraddtransportationController
);
router.post(
  "/remove/transportation",
  user_check_token,
  userremovetransportationValidation,
  userremeovetransportationController
);
router.post(
  "/edit/transportation",
  user_check_token,
  useredittransportationValidation,
  useredittransportationController
);

//for destination
router.post(
  "/add/accomodation",
  user_check_token,
  useraddaccomodationValidation,
  useraddaccomodationController
);
router.post(
  "/remove/accomodation",
  user_check_token,
  userremoveaccomodationValidation,
  userremeoveaccomodationController
);
router.post(
  "/edit/accomodation",
  user_check_token,
  usereditaccomodationValidation,
  usereditaccomodationController
);

module.exports = router;
