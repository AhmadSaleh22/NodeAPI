exports.Note = class Note {
  constructor(noteId, title, content, createdBy, createdAt) {
    this.noteId = noteId;
    this.title = title;
    this.content = content;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }
};
