import React from "react";

class NotesInput extends React.Component {
  render() {
    return (
      <form className="note-input">
        <h2>Buat Catatan</h2>
        <input type="text" placeholder="Ini adalah judul ..." />
        <input
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NotesInput;
