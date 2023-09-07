const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: { type: String, requires: true },
    user: { type: Schema.ObjectId, requires: true, ref: "user" },
    company: [{ type: Schema.ObjectId, requires: true, ref: "company" }],
    score: { type: Number, requires: false },
    jobs: [{ type: Schema.ObjectId, required: false, ref: "job" }],
    img: { type: String, requires: false },
  },
  {
    collection: "comment",
  }
);

const comment = mongoose.model("comment", commentSchema);
module.exports = comment;
