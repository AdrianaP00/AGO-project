const Company = require("../models/company.models");

const getCompanys = async (req, res) => {
  try {
    const companys = await Company.find()
      .populate("id_user")
      .populate("id_advertisement");
    return res.status(200).json(companys);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id)
      .populate("id_user")
      .populate("id_advertisement");
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const postCompany = new Company(req.body);
    postCompany._id = id;
    const updateCompany = await Company.findByIdAndUpdate(id, postCompany, {
      new: true,
    });
    if (!updateCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json(updateCompany);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = new Company(req.body);
    company._id = id;
    const updatedCompany = await Company.findByIdAndUpdate(id, company, {
      new: true,
    });
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json(updatedCompany);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCompany = await Company.findByIdAndDelete(id);
    if (!deletedCompany) {
      return res.status(404).json({ message: "ops! we don't have this id" });
    }
    return res.status(200).json(deletedCompany);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCompanys,
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
};
