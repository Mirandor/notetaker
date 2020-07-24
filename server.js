var express = require("express");
var path = require("path");
var gradient = require('gradient-string');
var http = require('http');
// var fs = require("fs");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(" ");
  console.log(gradient.cristal("App listening on: http://localhost:" + PORT));
});