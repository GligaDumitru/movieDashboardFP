import MOVIE_BD_KEY from "../config";

const MOVIE_BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_DB_KEY = MOVIE_BD_KEY();

export const createMovieUrl = (url, params) => {
  let mainUrl = `${MOVIE_BASE_URL}${url}?api_key=${MOVIE_DB_KEY}`;

  if (params) {
    Object.keys(params).forEach(arg => {
      mainUrl += `&${arg}=${params[arg]}`;
    });
  }
  return mainUrl;
};

export const searchMovies = ({ page = 1, query }) => {
  const mainUrl = createMovieUrl("/search/movie", {
    page,
    query
  });
  return mainUrl;
};

export const getTopMovies = () => {
  const mainUrl = createMovieUrl("/movie/top_rated");

  return mainUrl;
};
