var generator = require("../utils/generator");
var memoryStorage = require("../utils/memory.storage");
var model = require("../model/node.model");

exports.getAllNotes = (req, res) => {
  var generateSt = generator.generate();
  memoryStorage.store.setItem(generateSt, "It's key");

  var generateSe = generator.generate();
  memoryStorage.store.setItem(generateSe, "It's second Key'");

  var keys = memoryStorage.getKeys(memoryStorage.store);
  var values = memoryStorage.getValues(memoryStorage.store);
  console.log("get all notes values", JSON.stringify(values));
  var Note = model.Note;
  var noteObj = new Note(generateSt, "lkfd", "values", "klfg", new Date());
  res.send("Get All Notes " + JSON.stringify(noteObj));
};

exports.saveNote = (req, res) => {
  //   res.send("Save Notes");
  var generateID = generator.generate();
  var title = req.body.title;
  var content = req.body.content;
};

exports.updateNote = (req, res) => {
  res.send("update the note");
};

exports.deleteNote = (req, res) => {
  res.send("delete the note");
};
