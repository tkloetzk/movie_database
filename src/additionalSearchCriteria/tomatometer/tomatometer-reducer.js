import UPDATE_TOMATOMETER from './tomatometer-action-types';

export default function(state = 60, action) {
  switch (action.type) {
    case UPDATE_TOMATOMETER:
      return action.tomatometer;
    default:
      return state;
  }
}
