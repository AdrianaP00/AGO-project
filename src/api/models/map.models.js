const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

const map = mongoose.model("map", mapSchema);

module.exports = map;
