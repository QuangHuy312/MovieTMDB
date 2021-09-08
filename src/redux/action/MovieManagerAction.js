import { movieManager } from "../../services/MovieManagerService";
import { createAction } from "../action/createAction/createAction";
import {
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_DETAIL_MOVIE,
  GET_TRAILER_MOVIE_POPULAR,
  GET_TV_SHOW,
} from "../types/MovieManagerType";

export const getMoviePolularAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMoviePopular(page);
      dispatch(createAction(GET_LIST_MOVIE_POPULAR, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieTopRatedAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieTopRate(page);
      dispatch(createAction(GET_LIST_MOVIE_TOP_RATED, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieNowPlayingAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieNowPlaying(page);
      dispatch(createAction(GET_LIST_MOVIE_NOW_PLAYING, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieUpComingAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieUpComing(page);
      dispatch(createAction(GET_LIST_MOVIE_UP_COMING, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTVShowAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getTVShow(page);
      dispatch(createAction(GET_TV_SHOW, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getKeyTrailerAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getKeyTrailerPopular(id);
      dispatch(createAction(GET_TRAILER_MOVIE_POPULAR, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};
