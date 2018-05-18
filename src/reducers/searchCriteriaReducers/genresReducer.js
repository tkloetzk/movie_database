import initalState from "../initialState";
import * as types from "../../constants/actionTypes";

export default function(state = initalState.genres, action) {
  switch (action.type) {
    case types.UPDATE_GENRES:
      return action.genres;
    default:
      return state;
  }
}
