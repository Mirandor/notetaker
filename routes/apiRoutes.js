var dbNotes = require("../db/db.json");
// var notesIndex = require("../public/assets/js/index.js");
// const store = require("../db/store");

module.exports = function(app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "home.html"));
  // });

  app.get("/api/notes", function(req, res) {
    return res.json(dbNotes);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();
    
    console.log(newNote);

    dbNotes.push(newNote);

    res.json(newNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
   store
    .removeNewNote(req.params.id).then(() => res.json({ok: true}))
    .catch((err) => res.status(500).json(err));
  });

};