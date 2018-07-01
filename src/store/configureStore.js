import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import genres from '../searchCriteria/genres/genres-reducer';
import streamingServices from '../searchCriteria/streaming/streaming-reducer';
import {
  movies,
  fetchSearchedMoviesHasErrored,
  fetchSearchedMoviesIsLoading
} from '../searchCriteria/searchCriteria-reducer';

const rootReducer = combineReducers({
  genres,
  streamingServices,
  fetchSearchedMoviesHasErrored,
  fetchSearchedMoviesIsLoading,
  movies
});

const configureStore = () => ({
  ...createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
});

export default configureStore;
