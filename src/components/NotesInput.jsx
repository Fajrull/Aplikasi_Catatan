import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      title: "",
      body: "",
      titleChar: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (this.state.titleChar > 0) {
      this.setState((s) => {
        return {
          title: event.target.value,
          titleChar: s.titleChar - 1,
        };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        titleChar: 50,
      };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.titleChar}
        </p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <input
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NotesInput;
