const express = require("express");
const app = express();
app.set("view engine", "ejs");

const path = require("path");
const userroutes = require("./routes/user");
const admintoutes = require("./routes/admin");

app.use("/static", express.static(path.join(__dirname, "./public")));
app.use(admintoutes);
app.use(userroutes);
// routes içeri aktarılıyor

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT} adresinde calisiyor`);
});
