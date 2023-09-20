import React from "react";
import NotesAppHeader from "./NotesAppHeader";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    const updateNote = this.state.notes.map((notes) =>
      notes.id === id ? { ...notes, archived: !notes.archived } : notes
    );
    this.setState({ notes: updateNote });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter((notes) => {
      return notes.archived === false;
    });
    const archivedNotes = this.state.notes.filter((notes) => {
      return notes.archived === true;
    });

    return (
      <>
        <NotesAppHeader />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={activeNotes}
            onDelete={this.onDeleteEventHandler}
            onArchive={this.onArchiveEventHandler}
          />
          <h2>Arsip</h2>
          <NotesList
            notes={archivedNotes}
            onDelete={this.onDeleteEventHandler}
            onArchive={this.onArchiveEventHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
