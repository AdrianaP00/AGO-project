const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  hourSalary: { type: Number, required: true },
  img: { type: String, required: true },
});

const job = mongoose.model("job", jobSchema);

module.exports = job;
