const express = require("express");

const router = express.Router();
const {
  userProfile,
  followUser,
  unfollowUser,
  searchProfile,
  updateProfile,
  removefollower,
} = require("../controllers/profileController.js");

router.route("/search").get(searchProfile);
router.route("/:id").get(userProfile).patch(followUser);
router.route("/removefollower/:id").patch(removefollower);
router.route("/unfollow/:id").patch(unfollowUser);
router.route("/updateprofile/:id").put(updateProfile);

module.exports = router;