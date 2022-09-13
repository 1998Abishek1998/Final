const express = require("express");
const router = express.Router();

const { inviteFriend, acceptInvitation, rejectInvitation, deleteSingleFriend } = require("../controllers/friendInvitation.controller");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const requireAuth = require("../middlewares/requireAuth");

const invitationSchema = Joi.object({
    email: Joi.string().email().required(),
});


const approveInvitationSchema = Joi.object({
    invitationId: Joi.string().required(),
});


// invite a friend
router.post("/invite", inviteFriend);

// accept a friend invitation
router.post("/accept", acceptInvitation);

// reject a friend invitation
router.post("/reject", rejectInvitation);

// remove a friend of user
router.post('/removeFriend',  deleteSingleFriend)
module.exports = router;
