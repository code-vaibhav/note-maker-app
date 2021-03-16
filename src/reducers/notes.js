const notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [action.payload, ...state];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload)
    case 'EDIT_NOTE':
      return state.map(note => {
        if(note.id === action.payload.id){
          return {...note, ...action.payload.updates}
        } else {
          return note
        }
      });
    default:
      return state;
  }
}

export default notesReducer;