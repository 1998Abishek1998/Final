const express = require("express");
const router = express.Router();
const {
  getPosts,
  postUpload,
  likePosts,
  unlikePost,
  UpdatePost,
  postDetail,
  deletePost
} = require('../controllers/postContorller');

router.route("/upload").post(postUpload);
router.route("/getposts").get(getPosts);
router.route("/likepost/:id").patch(likePosts);
router.route("/unlikepost/:id").patch(unlikePost);
router.route("/updatepost/:id").patch(UpdatePost);
router.route("/postdetail/:id").get(postDetail).delete(deletePost);

module.exports = router;
