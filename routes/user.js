const express = require("express");
const router = express.Router();

const db = require("../data/db");

router.use("/blogs/:blogid", function (req, res) {
  db.execute("select*from blog")
    .then((result) => {
      res.render("users/blog", {
        title: "populer kurslar",
        blogs: result[0],
      });
    })
    .catch((err) => console.log(err));
});
router.use("/blogs", async function (req, res) {
  try {
    const [blogs] = await db.execute("select*from blog where onay=1");
    const [categories] = await db.execute("select*from new_table ");

    res.render("users/index", {
      title: "populer kurslar",
      blogs: blogs,
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
});

router.use("/", async function (req, res) {
  try {
    const [blogs] = await db.execute("select*from blog where onay=1");
    const [categories] = await db.execute("select*from new_table ");

    res.render("users/blog-detay", {
      title: "populer kurslar",
      blogs: blogs,
      categories: categories,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
