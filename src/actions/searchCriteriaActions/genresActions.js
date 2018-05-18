import * as types from "../../constants/actionTypes";

export const addGenreAction = genre => ({
  type: types.ADD_GENRE,
  genre
});

export const removeGenreAction = genre => ({
  type: types.REMOVE_GENRE,
  genre
});
