import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import genres from "../searchCriteria/genres/genres-reducer";
// import rootSaga from '../sagas'

const rootReducer = combineReducers({
  genres
});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    )
    // runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;
