const userModel = require("../model/user-model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { name, email, password } = req.body;

    // Check if name and email are arrays, and extract the first element if they are
    if (Array.isArray(name)) {
      name = name[0];
    }
    if (Array.isArray(email)) {
      email = email[0];
    }

    // Check if all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).send("All fields are required.");
    }

    console.log("Received data:", { name, email, password });

    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).send("Your account already exists.");
    }

    let salt = await bcrypt.genSalt(10);
    console.log("Generated salt:", salt);

    let hash = await bcrypt.hash(password, salt);
    console.log("Generated hash:", hash);

    user = await userModel.create({
      email,
      password: hash,
      name,
    });

    let token = generateToken({ email });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports.loginUser = async function (req, res) {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send("Invalid email or password.");
    }

    let result = await bcrypt.compare(password, user.password);
    if (result) {
      let token = generateToken({ email });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(200).send("Logged in successfully");
    } else {
      return res.status(400).send("Invalid email or password.");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};


module.exports.logoutUser = async function (req, res) {
  // Implementation for logout
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
   
  });
    res.status(201).send("logged out");
};

module.exports.getUserProfile = async function (req, res) {
  // Implementation for getting user profile
  res.send("logged in ")

};
