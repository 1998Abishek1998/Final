const express = require("express");

const router = express.Router();
const {
  searchProfile,
  updateProfile,
} = require("../controllers/profileController.js");

router.route("/search").get(searchProfile);
router.route("/updateprofile/:id").put(updateProfile);

module.exports = router;