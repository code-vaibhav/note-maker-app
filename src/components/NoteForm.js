import React, { useState } from "react"; 

function NoteForm({note, onSubmit}) {
  const [title, setTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");
  const [category, setCategory] = useState(note ? note.category : "");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const noteData = {title, description, category}
    onSubmit(noteData);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter Category"
        />
        <button type='submit'>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
