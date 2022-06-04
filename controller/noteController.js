var generator = require("../utils/generator");
var memoryStorage = require("../utils/memory.storage");
var model = require("../model/node.model");

exports.getAllNotes = (req, res) => {
  var values = memoryStorage.getValues(memoryStorage.store);
  console.log("get all notes values", JSON.stringify(values));
  return res.status(200).send(values);
};

exports.saveNote = (req, res) => {
  var generateID = generator.generate();
  var title = req.body.title;
  var createdBy = "Ahmad Saleh";
  var createdAt = new Date();
  var content = req.body.content;

  // check if empty content or title

  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "Please enter a title and check the content." });
  }

  // TODO: ADD Functionality to check title if exist or not
  //   else if(title){

  //   }

  var Note = model.Note;
  var noteObj = new Note(generateID, title, content, createdBy, createdAt);
  memoryStorage.store.setItem(generateID, noteObj);
  return res.status(201).send(noteObj);
};

exports.updateNote = (req, res) => {
  var title = req.body.title;
  var createdBy = "Ahmad Saleh";
  var Id = req.body.noteId;
  var createdAt = new Date();
  var content = req.body.content;

  // check note id if null or empty
  if (!Id) {
    return res.status(500).send("The note Id should not be null or empty");
  }
  // check if empty content or title

  if (!title || !content) {
    return res
      .status(500)
      .send({ error: "Please enter a title and check the content." });
  }

  // ADD Functionality to validate if note exists

  var existId = memoryStorage.store.getItem(Id);
  if (!existId) {
    return res.status(500).send("The Note is not exists");
  }

  var Note = model.Note;
  var noteObj = new Note(Id, title, content, createdBy, createdAt);
  memoryStorage.store.setItem(Id, noteObj);
  return res.status(200).send(noteObj);
};

exports.deleteNote = (req, res) => {
  res.send("delete the note");
};
