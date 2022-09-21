const Post = require("../models/Post.js");
const User = require("../models/User.js");

const { BAD_REQUESTError } = require("../errors/index.js");
const { StatusCodes } = require("http-status-codes");

const path = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const userProfile = async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findOne({ _id: userId });
  const post = await Post.find({ userid: userId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  res.status(StatusCodes.OK).json({ user, post});
};

const searchProfile = async (req, res) => {
  const users = await User.find({ 
    $and:[
      {
        companyId: { $eq: req.params.companyId},
      },
      {
        username: { $regex: req.query.username },
      }
  ]})
    .limit(10)
    .select("name username profilePicture");

  if (!users) {
    throw BAD_REQUESTError("no user found");
  }

  res.status(StatusCodes.OK).json({ users });
};

const updateProfile = async (req, res) => {
  const { name, username, location } = req.body;

  const { id: userId } = req.params;

  if (req.files) {
    if (req.files.profilePicture && req.files.coverPage) {
      const coverPath = req.files.coverPage;
      const coversrc = `/uploads/${req.files.coverPage.name}`;
      const profilePath = req.files.profilePicture;
      const profilesrc = `/uploads/${req.files.profilePicture.name}`;
      const imagePath1 = path.join(
        __dirname,
        "../public/uploads/" + `${profilePath.name}`
      );
      const imagePath = path.join(
        __dirname,
        "../public/uploads/" + `${coverPath.name}`
      );

      await coverPath.mv(imagePath);
      await profilePath.mv(imagePath1);

      const users = await User.findOneAndUpdate(
        { _id: userId },
        {
          name,
          username,
          location,
          coverpage: coversrc,
          profilePicture: profilesrc,
        },
        { new: true }
      );
      res.status(StatusCodes.OK).json({ users });
    }
    if (req.files.coverPage && !req.files.profilePicture) {
      const coverPath = req.files.coverPage;
      const coversrc = `/uploads/${req.files.coverPage.name}`;
      const imagePath = path.join(
        __dirname,
        "../public/uploads/" + `${coverPath.name}`
      );

      await coverPath.mv(imagePath);
      const users = await User.findOneAndUpdate(
        { _id: userId },
        {
          name,
          username,
          location,
          coverpage: coversrc,
        },
        { new: true }
      );
      res.status(StatusCodes.OK).json({ users });
    }

    if (req.files.profilePicture && !req.files.coverPage) {
      const profilePath = req.files.profilePicture;
      const profilesrc = `/uploads/${req.files.profilePicture.name}`;
      const imagePath1 = path.join(
        __dirname,
        "../public/uploads/" + `${profilePath.name}`
      );
      await profilePath.mv(imagePath1);

      const users = await User.findOneAndUpdate(
        { _id: userId },
        {
          name,
          username,
          location,

          profilePicture: profilesrc,
        },
        { new: true }
      );
      res.status(StatusCodes.OK).json({ users });
    }
  } else {
    const users = await User.findOneAndUpdate(
      { _id: userId },
      { name, username, location },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ users });
  }
};

module.exports = {
  userProfile,
  searchProfile,
  updateProfile,
};
