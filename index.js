const express = require("express");
const app = express();
app.set("view engine", "ejs");

const path = require("path");
const userroutes = require("./routes/user");
const admintoutes = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "./node_modules")));
app.use("/static", express.static(path.join(__dirname, "./public")));
app.use(admintoutes);
app.use(userroutes);
// routes içeri aktarılıyor

app.listen(3000, function () {
  console.log("listening on port 4000");
});
