const express = require("express");

const router = express.Router();
const {
  searchProfile,
  updateProfile,
  userProfile,
} = require("../controllers/profileController.js");

router.route("/user/:companyId/search").get(searchProfile);
router.route("/updateprofile/:id").put(updateProfile);
router.route('/:id').get(userProfile)
module.exports = router;