const express = require("express");
const router = express.Router();
const path = require("path");

const data = {
  title: "kurslarım",
  categories: ["React native", "Samet Cengiz", "node.js", "js"],
};

router.use("/admin/blogs/:blogsid", function (req, res) {
  res.render("admin/blog-create");
});

router.use("/admin/blogss/edit", function (req, res) {
  res.render("admin/blog-edit");
});

router.use("/admin/blogss", function (req, res) {
  res.render("admin/blog-list", data);
});

module.exports = router;
