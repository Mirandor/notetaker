var dbNotes = require("../db/db.json");
// var notesIndex = require("../public/assets/js/index.js");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(dbNotes);
  });

  app.post("/api/notes", function(req, res) {
    res.json(dbNotes);
  });

  // app.delete("/api/notes/:id", function(req, res) {
  //   res.json();
  // });

};