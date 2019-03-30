import {
  SET_FILTER,
  SHOW_MENU,
  GET_MOVIES,
  CHANGE_PAGE
} from "../actions/actionsType";

const initialState = {
  text: "",
  hasLoaded: false,
  nameMovieValue: "",
  showMenu: false
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      return {
        ...state,
        [payload.id + "Value"]: payload.valueData
      };
    }
    case SHOW_MENU: {
      return {
        ...state,
        showMenu: !state.showMenu
      };
    }
    case GET_MOVIES: {
      return {
        ...state,
        ...payload
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: payload.page
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
