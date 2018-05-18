import * as types from "../../constants/actionTypes";

export const updateGenreAction = genres => {
  return {
    type: types.UPDATE_GENRES,
    genres: genres
  };
};
