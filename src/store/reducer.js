const initialState = {
  age: 21,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'ADD':
      newState.age++;
      break;

    case 'SUB':
      newState.age--;
      break;
  }

  return newState;
};

export default reducer;
