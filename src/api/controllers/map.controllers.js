const Map = require("../models/map.models");

const getMaps = async (req, res) => {
  try {
    const allMap = await Map.find();
    return res.status(200).json(allMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMap = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMap = await Map.findById(id);
    return res.status(200).json(oneMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMap = async (req, res) => {
  try {
    const Maps = new Map(req.body);
    const createdMap = await Maps.save();
    return res.status(201).json(createdMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMap = async (req, res) => {
  try {
    const { id } = req.params;
    const putMap = new Map(req.body);
    putMap._id = id;
    const updateMap = await Map.findByIdAndUpdate(id, putMap, { new: true });
    if (!updateMap) {
      return res
        .status(404)
        .json({ message: "location not found" });
    }
    return res.status(200).json(updateMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMap = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMap = await Map.findByIdAndDelete(id);
    if (!deleteMap) {
      return res.status(404).json({ message: "location not found" });
    }
    return res.status(200).json(deleteMap);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMaps,
  getMap,
  postMap,
  putMap,
  deleteMap,
};
