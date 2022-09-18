const CompanyRegistered = require("../models/CompanyRegistered.js");
const nodemailer = require('nodemailer');
const User = require("../models/User.js");

const companyAdd = async(req,res) =>{
  try {
    const { Email, IsPan, CompanyNumber, CompanyName, Location, Contact } = req.body;
    if(!Email || !CompanyNumber || !Location || !Contact || !CompanyName) {
      return res.status(400).json({
        status: 'Failed',
        message: 'Please enter your company details carefully.'
      })
    }
    
    const userAlreadyExists = await CompanyRegistered.findOne({ Email: Email });

    if (userAlreadyExists) {
      return res.status(400).json({
        status: 'Failed',
        message: 'This company is already registered'
      })
    }
    await CompanyRegistered.create({
      Email: Email,
      IsPan: IsPan ? IsPan : false,
      CompanyNumber: CompanyNumber,
      CompanyName: CompanyName,
      Location: Location,
      Contact: Contact
    })

    return res.status(200).json({
      status: 'success',
      message: 'Company created'
    })

  } catch (error) {
    return res.status(500).json({
        status: 'Failed',
        error: error,
        message: 'Could not register you company'
      })
  }
}

const getAllCompany = async(req,res) =>{
  try {
    const companyFinder = await CompanyRegistered.find({})
     res.status(200).json({
        status: 'success',
        data : companyFinder
    })
    
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: 'Could not find company list'
    })
  }
}

const getSingleCompany = async(req,res) =>{
  try {
    const companyFinder = await CompanyRegistered.findById(req.params.Id)
     res.status(200).json({
        status: 'success',
        data : companyFinder
    })
    
  } catch (error) {
    res.status(500).json({
      status: 'Failed',
      message: 'Could not find company list'
    })
  }
}

const companyApprove = async(req,res) =>{
    try {
       const company = await CompanyRegistered.findOneAndUpdate(
          { _id: req.params.Id },
          {
            $set: { 
              IsActive: true
          },
          },
          { new: true }
        )

      if(company){
          const {CompanyName, Email} = company

        const output = `
            <h5>Welcome to Winkle Media ${CompanyName}</h5>
            <span>You have sucessfully registered in our system. Click the route for further process <a href='http://localhost:3000/owner/register/${req.params.Id}'>Register Owner</a></span>
        `
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.EMAIL_HOST_USER,
                pass: process.env.EMAIL_HOST_PASSWORD
            }
        });
        
          // send mail with defined transport object
          let info = transporter.sendMail({
            from: `WinkleMedia ${process.env.EMAIL_HOST_USER}`, // sender address
            to: `${Email}`, // list of receivers
            subject: "Node Test ✔", // Subject line
            text: '', // plain text body
            html: output, // html body
          },function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

          console.log("Message sent: %s", info.messageId);
      }
      return res.status(200).json({
        status: 'success',
        data: company
      })
    } catch (error) {
        return res.status(500).json({
          status: 'Failed',
          message: 'Could not approve the company'
        })
    }
}

const companyActive = async(req,res) =>{
    try {
       const company = await CompanyRegistered.findOneAndUpdate(
          { _id: req.params.Id },
          {
            $set: { 
              Status: 'active'
          },
          },
          { new: true }
        )
        return res.status(200).json({
          status: 'success',
          data: company
        })
    } catch (error) {
        return res.status(500).json({
          status: 'Failed',
          message: 'Could not approve the company'
        })
    }
}

// const companyUpdate = async(req, res) => {
//   try {
//     const {  }
//     const company = await CompanyRegistered.findOneAndUpdate(
//           { _id: req.params.Id },
//           {
//             $set: { 
//               status: 'active',
//               IsActive: true
//           },
//           },
//           { new: true }
//         )
//   } catch (error) {
    
//   }
// }

const companyReject = async(req,res) =>{
    try {
       const company = await CompanyRegistered.findOneAndUpdate(
            { _id: req.params.Id },
            {
              $set: { 
                Status: 'rejected',
                IsActive: false
            },
            },
            { new: true }
        )
        if(company){
          const {CompanyName, Email} = company

      const output = `
          <h5>Sorry your company was rejected from Winkle Media ${CompanyName}</h5>
          <span>Thank you for applying</span>
      `
      const transporter = nodemailer.createTransport({
          service:'gmail',
          auth: {
              user: process.env.EMAIL_HOST_USER,
              pass: process.env.EMAIL_HOST_PASSWORD
          }
      });
      
        // send mail with defined transport object
        let info = transporter.sendMail({
          from: `WinkleMedia ${process.env.EMAIL_HOST_USER}`, // sender address
          to: `${Email}`, // list of receivers
          subject: "Node Test ✔", // Subject line
          text: '', // plain text body
          html: output, // html body
        },function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        console.log("Message sent: %s", info.messageId);

      return res.status(200).json({
        status: 'success',
        data: company
      })
    }
    } catch (error) {
        return res.status(500).json({
          status: 'Failed',
          message: 'Could not reject the company'
        })
    }
}

const addCompanyEmployee = async(req, res) => {
  try {
    const { name, location, email, password,username, companyId} = req.body;
    if(!name || !username || !location || !email || !password || !companyId){
      return res.status(400).json({
        status: 'failed',
        message: 'please provide all the values'
      })
    }


    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({
        status: 'failed',
        message: 'User Already exists'
      })  
    }

    if(email && companyId){
      const emailVerified = await CompanyRegistered.findById(companyId)
    
      if(!emailVerified && !emailVerified.IsActive){
        return res.status(404).json({
          status: 'Failed',
          message: 'The company is not registerd or verified yet'
        })
      }

    const user = await User.create({
      name,
      username,
      location,
      email,
      password,
      companyId
    });

    await User.findOneAndUpdate(
      { _id: req.params.Id },
      {
        $push: { friends: user._id },
      },
      { new: true }
    );
    await User.findOneAndUpdate(
      { _id: user._id },
      {
        $push: { friends: req.params.Id },
      },
      { new: true }
    )

    const output = `
      <h5>Hello ${username} your account has been created at ${emailVerified.CompanyName}.</h5>
      <span>Click <a href='http://localhost:3000/'>here</a> to check out the application.</span>
    `
    const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD
    }
    });

  // send mail with defined transport object
    let info = transporter.sendMail({
      from: `WinkleMedia ${process.env.EMAIL_HOST_USER}`, // sender address
      to: `${email}`, // list of receivers
      subject: "Node Test ✔", // Subject line
      text: '', // plain text body
      html: output, // html body
    },function(error, info){
    if (error) {
      console.log(error);
      res.status(400).json({
        status: 'failed',
        message: 'Mail not sent'
      })
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  console.log("Message sent: %s", info.messageId);

    res.status(200).json({
      user: {
        email: user.email,
        location: user.location,
        name: user.name,
        username:user.username,
        companyId: user.companyId,
        friends: user.friends
      },
      location: user.location,
    });
    }

  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Something went wrong in our application. Please try again later!!'
    })
  }
}

module.exports = {
  companyAdd,
  getAllCompany,
  companyApprove,
  companyReject,
  companyActive,
  addCompanyEmployee,
  getSingleCompany
};
