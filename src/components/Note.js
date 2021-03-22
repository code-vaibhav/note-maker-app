import React from 'react'
import {Link} from 'react-router-dom'

function Note({note}) {
  return (
    <div>
      <Link to={'/note/'+note.id}><h2>{note.title}</h2></Link>
      <p>{note.description}</p>
      <p>{note.category}</p>
    </div>
  )
}

export default Note
