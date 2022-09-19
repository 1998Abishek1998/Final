const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    images: {
      type: Array,
    },

    location: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },

    likesid: { type: Array, default: [] },
    commentsid: { type: Array, default: [] },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "CompanyRegistration", required: true  },
    userid: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    saved: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post", PostSchema); // create user model in the schema
