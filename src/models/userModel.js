const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, require: true },
  password: String,
  createdAt: { type: Date, default: Date.now() },
});

const userModel = model("Users", userSchema);

module.exports = userModel;
