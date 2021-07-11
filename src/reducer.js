export const initialState = {
  isopen: false,
  user: null,
  darkmode: false,
};

//como no está exportada por default necesita ser importada con llaves.
export const actionTypes = {
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_USER: "SET_USER",
  SET_DARKMODE:"SET_DARKMODE",
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
      case actionTypes.SET_DARKMODE:
      return { ...state, darkMode: action.darkMode };
    default:
      return state;
  }
};

//como se exporta por default no necesita llaves al ser importado
export default reducer;
