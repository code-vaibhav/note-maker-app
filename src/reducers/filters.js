const intialState = {
  text: '',
  category: undefined
}

const filtersReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.payload};
    case 'SET_CATEGORY':
      return {...state, category: action.payload};
    default :
      return state
  }
}

export default filtersReducer