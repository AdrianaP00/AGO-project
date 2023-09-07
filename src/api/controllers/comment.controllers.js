const Comment = require("../models/comment.models");

const getComments = async (req, res) => {
  try {
    const allComments = await Comment.find()
      .populate("user")
      .populate("jobs")
      .populate("company");
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const oneComment = await Comment.findById(id)
      .populate("user")
      .populate("jobs")
      .populate("company");
    return res.status(200).json(oneComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const createdComment = await newComment.save();
    const fullComment = await Comment.findById(createdComment._id);
    return res.status(201).json(fullComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putComment = async (req, res) => {
  try {
    const { id } = req.params;
    const putComment = new Comment(req.body);
    putComment._id = id;
    const updateComment = await Comment.findByIdAndUpdate(id, putComment, {
      new: true,
    });
    if (!updateComment) {
      return res
        .status(404)
        .json({ message: "no existe un coach con este id" });
    }
    return res.status(200).json(updateComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteComment = await Comment.findByIdAndDelete(id);
    if (!deleteComment) {
      return res.status(404).json({ message: "Ops! retry" });
    }
    return res.status(200).json(deleteComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getComments,
  getComment,
  putComment,
  postComment,
  deleteComment,
};
