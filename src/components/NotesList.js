import React from 'react'
import { connect } from 'react-redux'
import Note from './Note';

function NotesList({notes}) {
  return (
    <div>
      {notes.map(note => <Note note={note} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes
})

export default connect(mapStateToProps)(NotesList) 
