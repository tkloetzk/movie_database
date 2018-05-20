import UPDATE_GENRES from './genres-action-types';

export const updateGenreAction = genres => ({
  type: UPDATE_GENRES,
  genres
});
