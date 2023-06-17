import React from "react";

function NotesAppHeader() {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <form className="note-search">
        <input type="text" placeholder="Cari catatan ..." name="search" />
      </form>
    </div>
  );
}

export default NotesAppHeader;
