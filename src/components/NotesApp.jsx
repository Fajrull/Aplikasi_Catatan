import React from "react";
import NotesAppHeader from "./NotesAppHeader";
import NotesAppBody from "./NotesAppBody";
import { getInitialData } from "../utils/index";

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
      <div>
        <NotesAppHeader />
        <NotesAppBody
          notes={this.state.notes}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
