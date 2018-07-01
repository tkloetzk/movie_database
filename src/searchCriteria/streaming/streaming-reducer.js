import UPDATE_STREAMING_SERVICES from './streaming-services-action-types';

export default function(state = [], action) {
  switch (action.type) {
    case UPDATE_STREAMING_SERVICES:
      return [...action.services];
    default:
      return state;
  }
}
