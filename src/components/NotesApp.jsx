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

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <>
        <NotesAppHeader />
        <div className="note-app__body">
          <NotesInput />
          <NotesList
            notes={this.state.notes}
            onDeleteHandler={this.onDeleteHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
