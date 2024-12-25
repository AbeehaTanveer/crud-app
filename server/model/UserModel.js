const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number
});

const User = mongoose.model("curd", UserSchema);

module.exports = User;