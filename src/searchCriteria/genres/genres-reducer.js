import * as types from './genres-action-types';

export default function(state = [], action) {
  switch (action.type) {
    case types.UPDATE_GENRES:
      return action.genres;
    default:
      return state;
  }
}
