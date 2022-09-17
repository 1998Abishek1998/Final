const CompanyRegistered = require("../models/CompanyRegistered.js");

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
    console.log({ Email, IsPan, CompanyNumber, CompanyName, Location, Contact })
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

const companyApprove = async(req,res) =>{
    try {
<<<<<<< HEAD
       const { selectedIds } = req.body
      //  const company = await CompanyRegistered.findOneAndUpdate(
      //     { _id: req.params.Id },
      //     {
      //       $set: { 
      //         Status: 'active',
      //         IsActive: true
      //     },
      //     },
      //     { new: true }
      //   )
      console.log(selectedIds)
      const company = await CompanyRegistered.update({ _id : {$eq : selectedIds}})
=======
       const company = await CompanyRegistered.findOneAndUpdate(
          { _id: req.params.Id },
          {
            $set: { 
              Status: 'active',
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

const companyActive = async(req,res) =>{
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
>>>>>>> origin/mongoDb-setup
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

        return res.status(200).json({
          status: 'success',
          data: company
        })

    } catch (error) {
        return res.status(500).json({
          status: 'Failed',
          message: 'Could not reject the company'
        })
    }
}

module.exports = {
  companyAdd,
  getAllCompany,
  companyApprove,
  companyReject,
  companyActive
};
