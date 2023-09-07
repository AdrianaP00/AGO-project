const Job = require("../models/job.models");

const getJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    return res.status(200).json(allJobs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const oneJob = await Job.findById(id);
    return res.status(200).json(oneJob);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postJob = async (req, res) => {
  try {
    const jobs = new Job(req.body);
    const createdjob = await jobs.save();
    return res.status(201).json(createdjob);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putJob = async (req, res) => {
  try {
    const { id } = req.params;
    const putJobs = new Job(req.body);
    putJobs._id = id;
    const updateJobs = await Job.findByIdAndUpdate(id, putJobs, { new: true });
    if (!updateJobs) {
      return res
        .status(404)
        .json({ message: "job not found" });
    }
    return res.status(200).json(updateJobs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletejob = await Job.findByIdAndDelete(id);
    if (!deletejob) {
      return res.status(404).json({ message: "job not found" });
    }
    return res.status(200).json(deletejob);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getJobs,
  getJob,
  postJob,
  putJob,
  deleteJob,
};
