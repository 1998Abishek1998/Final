const express = require("express");
const { companyApprove, companyAdd, getAllCompany, companyReject } = require("../controllers/companyController");
const authenticateUser = require("../middlewares/auth.js");

const router = express.Router();

router.route('/addCompany').post(companyAdd).get(authenticateUser , getAllCompany)
router.route('/verifyCompany').patch(authenticateUser, companyApprove)
router.route('/rejectCompany/:Id').patch(authenticateUser, companyReject)

module.exports = router;
