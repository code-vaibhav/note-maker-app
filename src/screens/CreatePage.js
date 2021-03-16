import React from 'react'
import { connect } from 'react-redux';
import NoteForm from "../components/NoteForm";
import { addNote } from '../actions/notes';

function CreatePage({addNote, history}) {
  const onSubmit = (note) => {
    addNote(note);
    history.push('/');
  }
  return (
    <div>
      <h1>Create Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note))
})

export default connect(null, mapDispatchToProps)(CreatePage);
