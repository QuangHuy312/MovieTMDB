import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { DashBoardManagerReducer } from "./reducer/DashBoardManagerReducer";
import { LazyReducer } from "./reducer/LazyReducer";
import { LoadingReducer } from "./reducer/LoadingReducer";
import { MovieDetailManagerReducer } from "./reducer/MovieDetailManagerReducer";
import { MovieManagerReducer } from "./reducer/MovieManagerReducer";
import { TVShowDetailManagerReducer } from "./reducer/TvShowDetailManagerReducer";
import { UserManagerReducer } from "./reducer/UserManagerReducer";

const reducer = combineReducers({
  //Reducer children
  MovieManagerReducer,
  MovieDetailManagerReducer,
  TVShowDetailManagerReducer,
  UserManagerReducer,
  DashBoardManagerReducer,
  LazyReducer,
  LoadingReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
