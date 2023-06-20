import React from "react";
import NotesItemBody from "./NotesItemBody";
import { showFormattedDate } from "../utils/index";
import NotesAction from "./NotesAction";

function NotesItem({
  title,
  body,
  id,
  onDelete,
  createdAt,
  archived,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NotesItemBody
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <NotesAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

export default NotesItem;
