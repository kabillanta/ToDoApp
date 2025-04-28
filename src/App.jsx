import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [notesList, setNoteslist] = useState([]);

  const handleSave = () => {
    if (text === "") {
      alert("The Notes is empty");
      return;
    }

    const newNote = {
      text,
      timestamp: new Date().toLocaleString(),
    };

    setNoteslist([...notesList, newNote]);
    setText("");
  };

  const handleClear = () => {
    setText("");
  };

  const clearList = () => {
    setNoteslist([]);
  };

  const handleDelete = (index) => {
    const updatedNotes = notesList.filter((note, i) => i !== index);
    setNoteslist(updatedNotes);
  };

  return (
    <>
      <h1 className="heading">To Do App</h1>
      <div className="mainbox">
        <input
          className="inputBox"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write Notes here !"
        />
        <div className="button-group">
          <button className="button" onClick={handleSave}>
            Save
          </button>
          <button className="button-clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="todo">
        {notesList.length === 0 ? (
          <h3 className="heading">No Notes Saved</h3>
        ) : (
          <>
            <h3 className="heading">Notes Saved</h3>
            <div className="Output">
              <ul>
                {notesList.map((note, index) => (
                  <li className="todoelement" key={index}>
                    <h4>Note {index + 1}</h4>
                    <p>{note.text}</p>
                    <code>{note.timestamp}</code>
                    <button
                      className="button-delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete Note
                    </button>
                  </li>
                ))}
              </ul>
              <button className="button-clear-all" onClick={clearList}>
                Clear All Notes
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
