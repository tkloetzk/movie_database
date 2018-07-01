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

export function fetchSearchedMovies() {
  return dispatch => {
    dispatch(fetchSearchedMoviessIsLoading(true));
    fetch(
      'http://www.flixfindr.com/api/movie?page=1&q={"filters":[{"name":"genres","op":"any","val":{"name":"name","op":"in","val":["Comedy"]}},{"name":"availabilities","op":"any","val":{"name":"filter_property","op":"in","val":["netflix:","hulu:free","hulu:plus","prime:"]}}],"order_by":[]}'
    )
      //  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(movies => {
        dispatch(fetchSearchedMoviessIsLoading(false));
        dispatch(fetchSearchedMoviesFetchDataSuccess(movies.objects));
        return movies; // needed?
      })
      .catch(() => {
        // if cors error install https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related on chrome
        dispatch(fetchSearchedMoviesHasErrored(true));
      });
  };
}
