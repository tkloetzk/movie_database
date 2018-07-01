export function fetchSearchedMoviesSuccess(movies) {
  return {
    type: 'FETCH_SEARCHED_MOVIES_SUCCESS',
    movies
  };
}
