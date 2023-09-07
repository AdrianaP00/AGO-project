const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  hours: [{ type: String, required: false }],
  day: { type: Date, required: false },
  email: { type: String, required: false },
  note: { type: String, required: false },
  confirmed: { type: Boolean, required: false },
  closed: { type: Boolean, required: false },
  direction: { type: String, required: false },
});

const form = mongoose.model("form", formSchema);

module.exports = form;
