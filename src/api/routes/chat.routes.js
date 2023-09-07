const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getChats,
  getChat,
  postChat,
  putChat,
  deleteChat,
} = require("../controllers/chat.controllers");

const chatRouter = express.Router();

chatRouter.get("/", [isAuth], getChats);
chatRouter.get("/:id", [isAuth], getChat);
chatRouter.post("/", [isAuth], postChat);
chatRouter.put("/:id", [isAuth], putChat);
chatRouter.delete("/:id", [isAuth], deleteChat);

module.exports = chatRouter;
