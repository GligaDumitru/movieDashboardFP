import { GET_MOVIES, CHANGE_PAGE } from "./actionsType";
export const getMovies = url => dispatch => {
  // console.log("am intrat", url);
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_MOVIES,
        payload: data
      })
    );
};

export const changePage = page => dispatch => {
  dispatch({
    type: CHANGE_PAGE,
    payload: { page }
  });

  return Promise.resolve();
};
