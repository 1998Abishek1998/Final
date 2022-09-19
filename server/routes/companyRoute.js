const express = require("express");
const { companyApprove, companyAdd, getAllCompany, companyReject, companyActive, addCompanyEmployee, getSingleCompany } = require("../controllers/companyController");
const authenticateUser = require("../middlewares/auth.js");

const router = express.Router();

router.route('/addCompany').post(companyAdd).get(authenticateUser , getAllCompany)
router.route('/verifyCompany/:Id').patch(authenticateUser, companyApprove)
router.route('/rejectCompany/:Id').patch(authenticateUser, companyReject)
router.route('/activateCompany/:Id').patch(authenticateUser, companyActive)
router.route('/addCompanyUser/:Id').post(authenticateUser, addCompanyEmployee)
router.route('/getsingleCompany/:Id').get(authenticateUser, getSingleCompany)
module.exports = router
