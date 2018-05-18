import * as types from "./genres-action-types";

export const updateGenreAction = genres => {
  return {
    type: types.UPDATE_GENRES,
    genres: genres
  };
};
