import UPDATE_MPAA from './mpaa-action-types';

export default function(state = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Unrated'], action) {
  switch (action.type) {
    case UPDATE_MPAA:
      return [...action.mpaaRating];
    default:
      return state;
  }
}
