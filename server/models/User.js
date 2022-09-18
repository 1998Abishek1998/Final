const mongoose = require("mongoose");
const validator = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, "please provide name"],
          minlength: 4,
          trim: true,
        },
        companyId: [{ type: mongoose.Schema.Types.ObjectId, ref: "CompanyRegistration" }],
        email: {
          type: String,
          required: [true, "Please provide email"],
          validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email",
          },
          unique: true,
        },
        profilePicture: {
          type: String,
          default: "/uploads/download.jpg",
        },
        role:{
          type : Number,
          default: 3,
          enum: {
            // 1: app-admin, 2: company-owner, 3: employee, 4: company-staff-manager
            values: [1, 2, 3, 4]
          }
        },
        coverpage: {
          type: String,
          default: "/uploads/download.jpg",
        },
        location: {
          type: String,
          trim: true,
          maxlength: 20,
          default: "my city",
        },
        private:{
          type: Boolean,
          default: false
        },
        username: { type: String },
        password: { type: String, required: [true, "can't be blank"] },
        companyId: { type: mongoose.Types.ObjectId, ref: "CompanyRegistration", required:[true, 'Company not Found']},
        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

userSchema.pre("save", async function () {
  // const salt = await bcrypt.genSalt(10);
  // this.password = await bcrypt.hash(this.password,salt)
  // console.log(this.modifiedPaths())
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { 
      userId: this._id,
      email: this.email,
      role: this.role,
      username: this.username 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
    // expiresIn:'100'
  );
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// userSchema.methods.IsFollowing = async function (follwingId, followersId) {
//   let friendArray = this.friends
//   let fId = mongoose.Types.ObjectId(friendId)
//   const isMatch = friendArray.includes(fId)
  
//   return isMatch;
// };


module.exports = mongoose.model("User", userSchema);
