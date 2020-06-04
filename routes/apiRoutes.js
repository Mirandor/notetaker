var dbNotes = require("../db/db.json");
// var notesIndex = require("../public/assets/js/index.js");

module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "home.html"));
  // });

  app.get("/api/notes", function(req, res) {
    return res.json(dbNotes);
  });

  app.post("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  // app.delete("/api/notes/:id", function(req, res) {
  //   res.json();
  // });

};