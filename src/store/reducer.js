const initialState = {
  age: 21,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === 'ADD') {
    newState.age++;
  }
  if (action.type === 'SUB') {
    newState.age--;
  }

  return newState;
};

export default reducer;
