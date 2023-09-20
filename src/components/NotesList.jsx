import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, archived, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0
        ? notes.map((notes) => (
            <NotesItem
              key={notes.id}
              id={notes.id}
              onDelete={onDelete}
              onArchive={onArchive}
              archived={archived}
              {...notes}
            />
          ))
        : "Tidak ada Catatan"}
    </div>
  );
}

export default NotesList;
