import UPDATE_TOMATOMETER from './tomatometer-action-types';

export const updateTomatometer = tomatometer => ({
  type: UPDATE_TOMATOMETER,
  tomatometer
});
