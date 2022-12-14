const { UnAuthenticatedError } = require("../errors/index.js");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // check header
  console.log(req.headers)
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    console.log(error);
    throw new UnAuthenticatedError("Authentication invalid");
  }
};

module.exports =  auth;
