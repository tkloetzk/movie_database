import UPDATE_SEARCH_INPUT from './searchInput-action-types';

export default function(state = '', action) {
  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.searchInput;
    default:
      return state;
  }
}
