import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, archived, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((notes) => (
        <NotesItem
          key={notes.id}
          id={notes.id}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={archived}
          {...notes}
        />
      ))}
    </div>
  );
}

export default NotesList;
