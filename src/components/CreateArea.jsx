import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const onChangeHandler = (ev) => {
    const { name, value } = ev.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    props.addNote(note);
    setNote({ title: "", content: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="create-note">
        <input
          onChange={onChangeHandler}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={onChangeHandler}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
