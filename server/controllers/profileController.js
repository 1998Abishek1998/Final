const Post = require("../models/Post.js");
const User = require("../models/User.js");

const { BAD_REQUESTError } = require("../errors/index.js");
const { StatusCodes } = require("http-status-codes");
const checkPermissions = require("../utils/checkPermissions.js");

const { fileURLToPath } = require("url");
const path = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const userProfile = async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findOne({ _id: userId });
  const post = await Post.find({ userid: userId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  const followings = await User.find({ _id: [...user.following] });
  const followers = await User.find({ _id: [...user.followers] });

  res.status(StatusCodes.OK).json({ user, post, followings, followers });
};

const followUser = async (req, res) => {
  const user = await User.find({
    _id: req.params.id,
    followers: req.user.userId,
  });

  if (user.length === 0) {
    const followersUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { followers: req.user.userId },
      },
      { new: true }
    );
    const followingUser = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $push: { following: req.params.id },
      },
      { new: true }
    );
    let addFriend1 = followingUser.following.some(item => followingUser.followers.includes(item))
    if(addFriend1){
      await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { friends: req.user.userId },
        },
        { new: true }
      );
      await User.findOneAndUpdate(
        { _id: req.user.userId },
        {
          $push: { friends: req.params.id },
        },
        { new: true }
      );
    }
    res.status(StatusCodes.OK).json({ success: true });
  }
  res.status(StatusCodes.OK).json({ success: false });
};

const unfollowUser = async (req, res) => {
  console.log(req.params.id);
  const user = await User.find({
    _id: req.params.id,
    followers: req.user.userId,
  });

  if (user.length > 0) {
    const followers = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { followers: req.user.userId },
      },
      { new: true }
    );
    const following = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $pull: { following: req.params.id },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ success: false, followers, following });
  }
  res.status(StatusCodes.OK).json({ success: true });
};

const removefollower = async (req, res) => {
  const user = await User.find({
    _id: req.user.userId,
    followers: req.params.id,
  });
  if (!user) {
    throw new BAD_REQUESTError("user not found");
  }

  if (user.length > 0) {
    const followers = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $pull: { followers: req.params.id, friends:req.params.id },
      },
      { new: true }
    );
    const following = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { following: req.user.userId, friends: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ success: false, followers, following });
  }
  res.status(StatusCodes.OK).json({ success: true });
};

const searchProfile = async (req, res) => {
  const users = await User.find({ username: { $regex: req.query.username } })
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
  followUser,
  unfollowUser,
  searchProfile,
  updateProfile,
  removefollower,
};
