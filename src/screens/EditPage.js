import React from 'react'
import { connect } from 'react-redux'
import { startEditNote, startDeleteNote } from '../actions/notes'
import NoteForm from '../components/NoteForm'

function EditPage(props) {
  const onSubmit = (updates) => {
    props.editNote(props.match.params.id, updates);
    props.history.push('/');
  }

  return (
    <div>
      <h1>Edit expense</h1>
      <NoteForm note={props.note} onSubmit={onSubmit}/>
      <button onClick={() => props.deleteNote(props.match.params.id)}>Remove Note</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  note: state.notes.find(note => note.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  editNote: (id, updates) => dispatch(startEditNote(id, updates)),
  deleteNote: (id) => dispatch(startDeleteNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);