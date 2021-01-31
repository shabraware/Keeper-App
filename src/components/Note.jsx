import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

const note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteNote(props.id)}><DeleteIcon/></button>
    </div>
  );
};
export default note;
