const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  everything: { type: String },
});

module.exports = mongoose.model("Schema", schema);
