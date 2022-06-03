var generator = require("../utils/generator");
exports.getAllNotes = (req, res) => {
  var generateSt = generator.generate();
  res.send("Get All Notes " + generateSt);
};

exports.saveNote = (req, res) => {
  res.send("Save Notes");
};

exports.updateNote = (req, res) => {
  res.send("update the note");
};

exports.deleteNote = (req, res) => {
  res.send("delete the note");
};
