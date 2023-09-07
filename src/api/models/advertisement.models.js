const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advertisementSchema = new Schema(
  {
    title: { type: String, requires: true },
    description: { type: String, requires: true },
    salary: { type: String, required: true },
    extra: { type: String, required: false },
    localization: { type: String, required: true },
    skills: { type: String, required: true },
    users: [{ type: Schema.ObjectId, required: false, ref: "user" }],
    jobs: [{ type: Schema.ObjectId, required: false, ref: "job" }],
    img: { type: String, requires: false },
    map: { type: Schema.ObjectId, required: false, ref: "map" },
  },
  {
    collection: "advertisement",
  }
);

const advertisement = mongoose.model("advertisement", advertisementSchema);
module.exports = advertisement;
