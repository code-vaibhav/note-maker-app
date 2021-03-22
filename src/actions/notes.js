import database from '../firebase/firebase';

// ADD_NOTE
export const addNote = (note = {}) => {
  const {
    id = '',
    title = '',
    description = '',
    category = ''
  } = note
  return {
    type: "ADD_NOTE",
    payload: {
      id, title, description, category
    }
  }
};

export const startAddNote = (noteData = {}) => {
  return (dispatch, getState) => {
    const {
      title = '',
      description = '',
      category = ''
    } = noteData

    const note = {title, description, category};
    
    database.ref('notes').push(note)
      .then((ref) => {
        dispatch(addNote({id: ref.key, ...note}));
      })
      .catch(() => {
        console.log('Add Note failed Please retry');
      });
  }
}

// DELETE_NOTE
export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: id
});

export const startDeleteNote = (id) => {
  return (dispatch) => {
    database.ref(`notes/${id}`).remove()
      .then(() => {
        dispatch(deleteNote(id));
      })
      .catch(() => {
        console.log('Data not deleted successfully please try again');
      });
  }
}

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  payload: {
    id: id,
    updates
  }
});

export const startEditNote = (id, updates) => {
  return (dispatch) => {
    database.ref(`notes/${id}`).update(updates)
      .then(() => {
        dispatch(editNote(id, updates));
      })
      .catch(() => {
        console.log('Data not updates successfully please try again.');
      });
  }
}

// SET_NOTES
export const setNotes = (notes) => ({
  type: "SET_NOTES",
  payload: notes
});

export const startSetNotes = () => {
  return (dispatch) => {
    return database.ref('notes').once('value')
      .then(snapshot => {
        const notes = [];
        snapshot.forEach(childSnapshot => {
          notes.push({id: childSnapshot.key, ...childSnapshot.val()})
        })
        dispatch(setNotes(notes))
      })
  }
}