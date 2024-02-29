const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) return res.status(400).json("User already Exit...");

    if (!first_name || !last_name || !email || !password)
      return res.status(400).json("All fields are required");

    if (!validator.isEmail(email))
      return res.status(400).json("Email must be Valid");

    if (!validator.isStrongPassword(password))
      return res.status(400).json("Password must be Strong");

    user = new userModel({ first_name, last_name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res
      .status(200)
      .json({ _id: user._id, first_name, last_name, email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser };
