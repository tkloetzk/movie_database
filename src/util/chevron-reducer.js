import UPDATE_CHEVRON from './chevron-action-types';

export default function(state = false, action) {
  switch (action.type) {
    case UPDATE_CHEVRON:
      return action.collapse;
    default:
      return state;
  }
}
