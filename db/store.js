const fs = require("fs");
const util = require("util");
const uuidv1 = require("uuid/v1");

var db = fs.readFileSync("/db/db.json");
var notes = JSON.parse(db);
console.log(notes);

const readFileAsync = util.promisify("fs.readFile");
const writeFileAsync = util.promisify("fs.writeFile");

class Store {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }

  // Add Note
  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    const newNote = { title, text, id: uuidv1() };

  // Return - Get this note
    return this.getNotes()
    .then((notes) => [...notes, newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
  }

  // Remove Note
  removeNote(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Store();
