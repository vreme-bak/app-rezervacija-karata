const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("User", user);
