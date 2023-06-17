import React from "react";
import NotesItemBody from "./NotesItemBody";
import { showFormattedDate } from "../utils/index";
import DeleteNotes from "./DeleteNotes";

function NotesItem({ title, body, id, onDelete, createdAt }) {
  return (
    <div className="note-item">
      <NotesItemBody
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <DeleteNotes id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
