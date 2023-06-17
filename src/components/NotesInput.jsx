import React from "react";

class NotesInput extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Ini adalah judul ..." />
        <input type="text" placeholder="Tuliskan catatanmu di sini ..." />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NotesInput;
