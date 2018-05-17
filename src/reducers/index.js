import { combineReducers } from "redux";
import genres from "./searchCriteriaReducers/genresReducer";
import { root } from "postcss";

const rootReducer = combineReducers({
  genres
});

export default rootReducer;
