import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";

function NotesApp() {
  const notes = getInitialData();

  return (
    <div className="note-app__body">
      <NotesList notes={notes} />
    </div>
  );
}

export default NotesApp;
