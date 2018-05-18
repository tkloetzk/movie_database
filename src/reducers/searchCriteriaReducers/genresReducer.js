import initalState from "../initialState";
import * as types from "../../constants/actionTypes";

export default function(state = initalState.genres, action) {
  switch (action.type) {
    case types.ADD_GENRE:
      return {
        ...state,
        genres: [...state.genres, action.genre]
      };
    case types.REMOVE_GENRE:
      return {
        ...state,
        genres: state.genres.filter(item => item !== action.genre)
      };
    default:
      return state;
  }
}
