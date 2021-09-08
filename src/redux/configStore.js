import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { MovieDetailManagerReducer } from "./reducer/MovieDetailManagerReducer";
import { MovieManagerReducer } from "./reducer/MovieManagerReducer";
import { TVShowDetailManagerReducer } from "./reducer/TvShowDetailManagerReducer";

const reducer = combineReducers({
  //Reducer children
  MovieManagerReducer,
  MovieDetailManagerReducer,
  TVShowDetailManagerReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
