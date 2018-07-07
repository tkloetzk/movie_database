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

export function fetchSearchedMovies(genres, services, personal) {
  return dispatch => {
    dispatch(fetchSearchedMoviessIsLoading(true));
    const genresArray = map(genres, genre => genre.value);
    const encodedGenres =
      genresArray.length > 0
        ? `{"name":"genres","op":"any","val":{"name":"name","op":"in","val":${encodeURIComponent(
            JSON.stringify(genresArray)
          )}}},`
        : '';
    const encodedServices = encodeURIComponent(JSON.stringify(services));

    if (personal) {
      console.log('get personal movies from DB. Combine into promise');
    }
    const url = `http://www.flixfindr.com/api/movie?page=1&q={"filters":[${encodedGenres}{"name":"availabilities","op":"any","val":{"name":"filter_property","op":"in","val":${encodedServices}}}],"order_by":[{"field":"critics_score","direction":"desc"}]}`;
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
