import * as types from './genres-action-types';

const updateGenreAction = genres => ({
  type: types.UPDATE_GENRES,
  genres
});

export default updateGenreAction;
