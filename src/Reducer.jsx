export const initialState = {
  user: null, // default user is null
};

export const actionTypes = {
  SET_USER: "SET_USER", //dispath action from data layor
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
