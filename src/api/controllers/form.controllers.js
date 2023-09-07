const Form = require("../models/form.models");
const User = require("../models/user.models");

const getForms = async (req, res) => {
  try {
    const Forms = await Form.find();
    return res.status(200).json(Forms);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getForm = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);
    return res.status(200).json(form);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postForm = async (req, res) => {
  try {
    const postedForm = req.body;
    const postForm = new Form(postedForm);
    const post = await postForm.save();

    const idUser = req.params.id;
    const idWorker = req.params.worker;

    const foundUser = await User.findById(idUser);
    if (!foundUser) {
      return res.status(404).json({ message: "Error de usuario" });
    }
    foundUser.petitions.push(post._id);
    await foundUser.save();

    const foundWorker = await User.findById(idWorker);
    if (!foundWorker) {
      return res.status(404).json({ message: "Error de usuario" });
    }
    foundWorker.petitions.push(post._id);
    await foundWorker.save();

    console.log(foundUser);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getForms,
  getForm,
  postForm,
};
