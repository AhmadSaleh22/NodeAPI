const express = require("express");
const router = express.Router();
const NotesController = require("../controller/noteController");
router.get("/notes", NotesController.getAllNotes);
router.post("/notes/save", NotesController.saveNote);
router.put("/notes/update", NotesController.updateNote);
router.delete("/notes/delete/:noteId", NotesController.deleteNote);

module.exports = router;
