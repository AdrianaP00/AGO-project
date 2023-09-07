const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Users = require("../api/models/user.models");
const userData = require("../dbs/user.db");
const DB_URL = process.env.DB_URL;
const bcrypt = require("bcrypt");

mongoose
  .connect(DB_URL)
  .then(async () => {
    Users.collection.drop();
    const newSeeds = userData.map((user) => {
      const encryptedPassword = bcrypt.hashSync(user.password, 10);
      const newUser = {
        ...user,
        password: encryptedPassword,
      };
      return new Users(newUser);
    });

    await Users.insertMany(newSeeds);
    console.log("ok");
  })
  .catch((error) => console.log("Error", error))
  .finally(() => mongoose.disconnect());
