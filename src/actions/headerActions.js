import { SET_FILTER, SHOW_MENU } from "./actionsType";

export const setFilter = (valueData, id) => {
  return {
    type: SET_FILTER,
    payload: {
      valueData,
      id
    }
  };
};

export const toggleMenu = () => {
  return {
    type: SHOW_MENU
  };
};





