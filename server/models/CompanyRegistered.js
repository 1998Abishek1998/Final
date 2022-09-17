const mongoose = require('mongoose')

const companyRegistration = mongoose.Schema({
    IsActive: {
      type: Boolean,
      default: false
    },
    IsPan: {
      type: Boolean,
      default: false
    },
    CompanyNumber: {
      type: String,
      required: [true, 'Please provide company Number']
    },
    Location:{
      type: String,
      required: [true, 'Please provide company location.']
    },
    CompanyName:{ type: String, required: [true, 'Please enter company name.']},
    CompanyOwner : [{ type: mongoose.Types.ObjectId, ref: "User" }],
    Contact:{
      type: Number,
      required: [true, 'Please enter company phone number']
    },
    Status:{
        type : String,
        default: "pending",
        enum: {
          // 1: admin, 2: staff, 3: user
          values: ["active","pending","rejected"]
        }
    },
    Email: {
        type: String,
        required: [true, "Please provide email updates"],
        unique: true,    
    },
    CompanyPositions:{
      type: Array,
      default: []
    }
})

module.exports = mongoose.model("CompanyRegistration", companyRegistration); // create user model in the schema
