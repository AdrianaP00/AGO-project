const User = require("../api/models/user.models");

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  // const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(String(password));
};

const usedEmail = async (email) => {
  const users = await User.find({ email: email });
  return users.length;
};

const validateName = (name) => {
  const regex = /[a-zA-Z]{3,30}$/;
  return regex.test(String(name));
};

module.exports = { validateEmail, validatePassword, usedEmail, validateName };
