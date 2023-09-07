const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const { generateSign } = require("../../utils/jwt");
const { sendRegistrationEmail } = require("../../utils/mailer.config");
const {
    validateEmail,
    validatePassword,
    usedEmail,
    validateName,
  } = require("../../utils/validators");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
      .populate("comments")
      .populate("specialization")
      .populate("favoriteCompany")
      .populate("contacts")
      .populate("petitions");
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await User
      .findById(id)
      .populate("comments")
      .populate("specialization")
      .populate("favoriteCompany")
      .populate("contacts")
      .populate("petitions");
    return res.status(200).json(oneUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const putUser = new User(req.body);
    putUser._id = id;
    if (!validatePassword(putUser.password)) {
      return res.status(400).json({ message: "Invalid password formating" });
    }
    putUser.password = bcrypt.hashSync(putUser.password, 10);
    const updateUser = await User.findByIdAndUpdate(id, putUser, { new: true });
    if (!updateUser) {
      return res
        .status(404)
        .json({ message: "Oh no! we don't have this user" });
    }
    return res.status(200).json(updateUser);
  } catch (error) {

    return res.status(500).json(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);

    if (!validateName(newUser.name)) {
      return res.status(400).json({ message: "invalid name" });
    }
    if (!validateEmail(newUser.email)) {
      return res.status(400).json({ message: "invalid email address" });
    }
    if (!validatePassword(newUser.password)) {
      return res.status(400).json({ message: "invalid password" });
    }
    if (await usedEmail(newUser.email)) {
      return res.status(400).json({ message: "the email already exists" });
    }
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await newUser.save();
    sendRegistrationEmail(newUser);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email, confirmed: true,});
    if (!userInfo) {
      return res.status(404).json({ message: "incorrect email address" });
    }
    if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
      return res.status(404).json({ message: "incorrect password" });
    }
    const token = generateSign(userInfo._id, userInfo.email);
    return res.status(200).json({ user: userInfo, token: token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({ message: "Id not found" });
    }
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putConfirmUser = async (req, res) => {
  try {
    const { id } = req.params;
    const putUser = req.body; 
    const updateUser = await User.findByIdAndUpdate(id, putUser, {
      new: true,
    });
    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const confirmUser = async (req, res, next) => {
  User
    .findByIdAndUpdate(req.params.id, { confirmed: true })
    .then(() => {
      console.log("bulala que pasa aqui");
      res.redirect("/");
    })
    .catch((error) => console.log("errorazo", error));
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  putUser,
  deleteUser,
  confirmUser,
  putConfirmUser,
};
