import UPDATE_GENRES from './genres-action-types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_GENRES:
      return action.genres;
    default:
      return state;
  }
}
