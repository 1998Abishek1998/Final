const Post = require("../models/Post.js");
const User = require("../models/User");

const { BAD_REQUESTError } = require("../errors/index.js");
const { StatusCodes } = require("http-status-codes");
const checkPermissions = require("../utils/checkPermissions.js");

//const { fileURLToPath } = require("url");
const path = require("path");
const CompanyRegistered = require("../models/CompanyRegistered.js");

// const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const postUpload = async (req, res, next) => {
  const { location, description, companyId } = req.body;
  const userId = req.user.userId;
  const imagelst = [];
  
  if(!companyId) res.status(400).json({
    status: 'failed',
    message:'company not found'
  })
  
  if(!description){
    return res.status(400).json({ 
      status:'400',
      data: null,
      message : 'Description must not be empty'
    });
  }
  if (req.files) {
    const { images } = req.files;
    for (let i = 0; i < images.length; i++) {
      const postPath = images[i];
      const src = `/posts/${images[i].name}`;

      const imagePath = path.join(
        __dirname,
        "../public/posts/" + `${images[i].name}`
      );
      await postPath.mv(imagePath);
      imagelst.push(src);
    }
  }

  const post = await Post.create({
    images: imagelst,
    location: location,
    description,
    userid: userId,
    companyId: companyId
  });
  if (!post) {
    console.log("throw error");
  }
  res.status(StatusCodes.CREATED).json({ post });
};

const getPosts = async (req, res) => {
  
  try {
    const following = await User.findOne({ _id: req.user.userId });
    const posts = await Post.find({
      companyId: following.companyId
    })
      .populate("userid likesid", "profilePicture username location")
      .sort("-createdAt");

    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.log(error);
  }
};

const likePosts = async (req, res) => {
  const post = await Post.find({
    _id: req.params.id,
    likesid: req.user.userId,
  });

  if (post.length === 0) {
    const like = await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { likesid: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ like });
  }
  res.status(StatusCodes.OK).json({ post });
};

const unlikePost = async (req, res) => {
  const like = await Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      $pull: { likesid: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like });

  if (!like) {
    throw new BAD_REQUESTError('this post does"not exist');
  }
};

const UpdatePost = async (req, res) => {
  const { id: postId } = req.params;

  const { description, location, networkpath } = req.body;

  const imagelst = [];
  const newlist = [];
  const post = await Post.findOne({ _id: postId });
  console.log(req.body);
  console.log(req.files);

  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`);
  }

  if ((req.files === null) && (networkpath.length > 0)) {
    console.log("new");
    for (let i = 0; i < networkpath.length; i++) {
      newlist.push(networkpath[i]);
    }
  } else if (req.files && networkpath) {
    console.log("r and n");
    const { filePath } = req.files;

    for (let i = 0; i < filePath.length; i++) {
      const postPath = filePath[i];
      const src = `/posts/${filePath[i].name}`;

      const imagePath = path.join(
        __dirname,
        "../public/posts/" + `${filePath[i].name}`
      );
      await postPath.mv(imagePath);
      newlist.push(src);
    }
    for (let i = 0; i < networkpath.length; i++) {
      newlist.push(networkpath[i]);
    }
  } else if (
    req.files.filePath.length > 0 &&
    req.files !== null &&
    !networkpath
  ) {
    console.log("rl");

    const { filePath } = req.files;

    for (let i = 0; i < filePath.length; i++) {
      const postPath = filePath[i];
      const src = `/posts/${filePath[i].name}`;

      const imagePath = path.join(
        __dirname,
        "../public/posts/" + `${filePath[i].name}`
      );
      await postPath.mv(imagePath);
      newlist.push(src);
    }
  } else if (req.files === null && networkpath.length > 0) {
    console.log(" n");

    for (let i = 0; i < networkpath.length; i++) {
      newlist.push(networkpath[i]);
    }
  } else if (!networkpath) {
    console.log("hello 2");

    const profilePath = req.files.filePath;
    const src = `/uploads/${profilePath.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/uploads/" + `${profilePath.name}`
    );
    await profilePath.mv(imagePath);
    imagelst.push(src);
  } else if (!req.files && !networkpath) {
    throw new BAD_REQUESTError("Please Provide All Values");
  } else {
    console.log("hello8888");
  }

  // check permissions

  post.location = location;
  post.description = description;
  post.images = newlist;

  await post.save();

  res.status(StatusCodes.OK).json({ post });
};

const postDetail = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findById({ _id: postId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  if (!post) {
    throw new BAD_REQUESTError("no such post");
  }

  res.status(StatusCodes.OK).json({ post });
};

const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Post.findOne({ _id: postId });

  if (!post) {
    throw new CustomError.NotFoundError(`No post with id : ${postId}`);
  }
  console.log(req.user);
  console.log(req.createdBy);

  checkPermissions(req.user, post.userid);

  await post.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

module.exports = {
  postUpload,
  getPosts,
  likePosts,
  unlikePost,
  UpdatePost,
  postDetail,
  deletePost,
};
