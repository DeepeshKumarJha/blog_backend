const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  slug: { type: String, require: true },
  title: { type: String },
  body: { type: String },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

const blogModel = model("Blogs", blogSchema);

module.exports = blogModel;
