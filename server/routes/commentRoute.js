const express = require("express");

const router = express.Router();
const {
  createComment,
  deleteComment,
  getComments
} = require("../controllers/commentController.js");

router.route("/post").post(createComment);
router.route("/delete/:id").delete(deleteComment);
router.route("/get/:id").get(getComments)

module.exports = router;
