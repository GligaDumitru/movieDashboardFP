import { GET_MOVIES } from "./actionsType";
export const getMovies = url => dispatch => {
  console.log("am intrat", url);
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_MOVIES,
        payload: data
      })
    );
};
