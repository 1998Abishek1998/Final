const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // tag: Object,
    // reply: mongoose.Types.ObjectId,
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    commentedBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },

    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
    postUserId: mongoose.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema); // create user model in the schema

