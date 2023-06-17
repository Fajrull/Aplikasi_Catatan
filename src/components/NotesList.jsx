import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((notes) => (
          <NotesItem
            key={notes.id}
            id={notes.id}
            onDelete={onDelete}
            {...notes}
          />
        ))}
      </div>
    </>
  );
}

export default NotesList;
