import UPDATE_YEAR from './year-action-types';

export default function(
  state = {
    min: 1930,
    max: 2018
  },
  action
) {
  switch (action.type) {
    case UPDATE_YEAR:
      return action.year;
    default:
      return state;
  }
}
