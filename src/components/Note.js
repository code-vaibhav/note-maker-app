import React from 'react'

function Note({note}) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <p>{note.category}</p>
    </div>
  )
}

export default Note
