export const initialState = {
  isopen: false,
  user: null,
};

//como no está exportada por default necesita ser importada con llaves.
export const actionTypes = {
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_USER: "SET_USER",
};

//escucha si se ha alterado el estado inicial.
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isopen: action.isopen,
      };
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

//como se exporta por default no necesita llaves al ser importado
export default reducer;
