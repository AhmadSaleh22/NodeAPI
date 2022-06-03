const express = require("express");
const router = express.Router();
const NotesController = require("../controller/noteController");
router.get("/notes", NotesController.getAllNotes);

module.exports = router;
