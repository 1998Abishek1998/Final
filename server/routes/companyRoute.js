const express = require("express");
const { companyApprove, companyAdd, getAllCompany, companyReject, companyActive } = require("../controllers/companyController");
const authenticateUser = require("../middlewares/auth.js");

const router = express.Router();

router.route('/addCompany').post(companyAdd).get(authenticateUser , getAllCompany)
router.route('/verifyCompany').patch(authenticateUser, companyApprove)
router.route('/rejectCompany/:Id').patch(authenticateUser, companyReject)
router.route('/activateCompany/:Id').patch(authenticateUser, companyActive)

module.exports = router;
