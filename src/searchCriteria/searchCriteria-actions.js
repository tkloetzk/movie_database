import { map } from 'lodash';
import axios from 'axios';
import {
  FETCH_SEARCHED_MOVIES_HAS_ERRORED,
  FETCH_SEARCHED_MOVIES_SUCCESS,
  FETCH_SEARCHED_MOVIES_IS_LOADING
} from './searchCriteria-action-types';

export function fetchSearchedMoviesHasErrored(bool) {
  return {
    type: FETCH_SEARCHED_MOVIES_HAS_ERRORED,
    hasErrored: bool
  };
}

export function fetchSearchedMoviessIsLoading(bool) {
  return {
    type: FETCH_SEARCHED_MOVIES_IS_LOADING,
    isLoading: bool
  };
}

export function fetchSearchedMoviesFetchDataSuccess(movies) {
  return {
    type: FETCH_SEARCHED_MOVIES_SUCCESS,
    movies
  };
}

export function fetchSearchedMovies(genres) {
  return dispatch => {
    dispatch(fetchSearchedMoviessIsLoading(true));
    const genresArray = map(genres, genre => genre.value);
    const encodedGenres = encodeURIComponent(JSON.stringify(genresArray));
    const url = `http://www.flixfindr.com/api/movie?page=1&q={"filters":[{"name":"genres","op":"any","val":{"name":"name","op":"in","val":${encodedGenres}}},{"name":"availabilities","op":"any","val":{"name":"filter_property","op":"in","val":["netflix:","hulu:free","hulu:plus","prime:"]}}],"order_by":[]}`;

    axios
      .get(url)
      .then(movies => {
        dispatch(fetchSearchedMoviessIsLoading(false));
        dispatch(fetchSearchedMoviesFetchDataSuccess(movies.data.objects));
        return movies.data.objects; // needed?
      })
      .catch(error => {
        console.log(error);
        // if cors error install https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related on chrome
        dispatch(fetchSearchedMoviesHasErrored(true));
      });
  };
}
