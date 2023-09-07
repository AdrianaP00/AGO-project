const Advertisement = require("../models/advertisement.models");

const getAdvertisements = async (req, res) => {
  try {
    const allAdvertisement = await Advertisement.find()
      .populate("users")
      .populate("jobs")
      .populate("map");
    return res.status(200).json(allAdvertisement);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const oneAdvertisement = await Advertisement.findById(id)
      .populate("users")
      .populate("jobs")
      .populate("map");
    return res.status(200).json(oneAdvertisement);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postAdvertisement = async (req, res) => {
  try {
    const newAdvertisement = new Advertisement(req.body);
    const createAdvertisement = await newAdvertisement.save();
    return res.status(201).json(createAdvertisement);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const putAdvertisement = new Advertisement(req.body);
    putAdvertisement._id = id;
    const updateAdvertisement = await Advertisement.findByIdAndUpdate(
      id,
      putAdvertisement,
      { new: true }
    );
    if (!updateAdvertisement) {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    return res.status(200).json(updateAdvertisement);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteAdvertisement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAdvertisement = await Advertisement.findByIdAndDelete(id);
    if (!deleteAdvertisement) {
      return res.status(404).json({ message: "Advertisement not found" });
    }
    return res.status(200).json(deleteAdvertisement);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAdvertisements,
  getAdvertisement,
  postAdvertisement,
  putAdvertisement,
  deleteAdvertisement,
};
