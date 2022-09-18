const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const path = require("path");
const multer = require('multer')
const { BAD_REQUESTError, UnAuthenticatedError } = require("../errors/index.js");
const CompanyRegistered = require("../models/CompanyRegistered");

const register = async (req, res) => {
 
  const { name, location, email, password,username, companyId, role } = req.body;
  if(!name || !username || !location || !email || !password || !companyId){
    throw new BAD_REQUESTError("please provide all the values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BAD_REQUESTError("Email already in use");
  }

  if(email && companyId) {    
    console.log(email,companyId)
    const emailVerified = await CompanyRegistered.findById(companyId)
    
    if(!emailVerified && !emailVerified.IsActive){
      return res.status(404).json({
        status: 'Failed',
        message: 'The company is not registerd or verified yet'
      })
    }

  if (req.files) {
    const profilePath = req.files.profilePicture;
    const src = `/uploads/${profilePath.name}`;
    const profilePicture = src || "hello";
    
    // const storage = multer.diskStorage({
    //   destination: (req, file, cb) => {
    //     cb(null,'../uploads')
    //   },
    //   filename: (req, file, cb) =>{
    //     cb(null, Date.now() + path.extname(file.originalname))
    //   }
    // })
    
    // const upload = multer({ storage: storage})
    
    // upload.single('image')
    
    const user = await User.create({
      name,
      username,
      location,
      profilePicture,
      email,
      password,
      role,
      companyId
    });  

    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user: {
        email: user.email,
        location: user.location,
        profilePicture: user.profilePicture,
        name: user.name,
        username:user.username,
        companyId: user.companyId
      },
      token,
      location: user.location,
    });
  }
  else {
    const user = await User.create({
      name,
      username,
      location,
      email,
      password,
      role,
      companyId
    });  

    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
      user: {
        email: user.email,
        location: user.location,
        name: user.name,
        username:user.username,
        companyId: user.companyId
      },
      token,
      location: user.location,
    });
    }
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BAD_REQUESTError("Please provide all values");
  }
  const useremail = await User.findOne({ email }).select("+password");
  const username = await User.findOne({ username:email }).select("+password");

  const user = useremail?useremail:username;
  
  if (!user ) {
    res.status(StatusCodes.NOT_FOUND).json({
      status:'failed',
      data: [],
      message: 'Invalid Credentials'
     });
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status:'failed',
      data: [],
      message: 'Please provide valid email or password'
     });  
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });

  
};

module.exports = { register ,login};
