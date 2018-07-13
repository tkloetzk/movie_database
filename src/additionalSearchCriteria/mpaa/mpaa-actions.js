import UPDATE_MPAA from './mpaa-action-types';

export const updateMPAASelections = mpaaRating => ({
  type: UPDATE_MPAA,
  mpaaRating
});
