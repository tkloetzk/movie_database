import { combineReducers } from "redux";
import genres from "./searchCriteriaReducers/genresReducer";

const rootReducer = combineReducers({
  genres
});

export default rootReducer;
