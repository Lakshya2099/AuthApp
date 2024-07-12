const jwt = require("jsonwebtoken");
const userModel = require("../model/user-model");

module.exports.protect = async (req, res, next) => {
  if (!req.cookies.token) {
    return res.status(401).send("Not authorized, you don't have permission to access");
  }

  try {
    const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: data.email }).select("-password");

    if (!user) {
      return res.status(401).send("Not authorized");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).send("Not authorized");
  }
};
