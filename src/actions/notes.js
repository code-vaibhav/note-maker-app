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

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: id
});

export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  payload: {
    id: id,
    updates
  }
});