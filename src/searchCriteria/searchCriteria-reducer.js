import {
  FETCH_SEARCHED_MOVIES_HAS_ERRORED,
  FETCH_SEARCHED_MOVIES_IS_LOADING,
  FETCH_SEARCHED_MOVIES_SUCCESS
} from './searchCriteria-action-types';

export function fetchSearchedMoviesHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_SEARCHED_MOVIES_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function fetchSearchedMoviesIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_SEARCHED_MOVIES_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function movies(state = [], action) {
  switch (action.type) {
    case FETCH_SEARCHED_MOVIES_SUCCESS:
      return action.movies;

    default:
      return state;
  }
}
