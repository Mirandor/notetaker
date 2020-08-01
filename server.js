var express = require("express");
var gradient = require('gradient-string');
// var fs = require("fs");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
  console.log(" ");
  console.log(gradient.cristal("App listening on: http://localhost:" + PORT));
});