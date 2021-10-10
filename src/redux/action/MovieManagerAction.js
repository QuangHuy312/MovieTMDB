import { movieManager } from "../../services/MovieManagerService";
import { createAction } from "../action/createAction/createAction";
import {
  FETCH_REQUEST_MOVIE_POPULAR,
  FETCH_REQUEST_MOVIE_TOP_RATED,
  FETCH_REQUEST_TVSHOW_TOP_RATED,
  GET_GENRES_MOVIE_LIST,
  GET_GENRES_TV_SHOW_LIST,
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_MOVIE_LIST,
  GET_TRAILER_MOVIE_POPULAR,
  GET_TV_SHOW_LIST,
  GET_TV_SHOW_TOP_RATE,
  HIDE_REQUEST_MOVIE_POPULAR,
  HIDE_REQUEST_MOVIE_TOP_RATED,
  HIDE_REQUEST_TVSHOW_TOP_RATED,
} from "../types/MovieManagerType";

export const getMoviePolularAction = (page) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_MOVIE_POPULAR));
    try {
      const { data } = await movieManager.getMoviePopular(page);
      await dispatch(createAction(GET_LIST_MOVIE_POPULAR, data.results));
      dispatch(createAction(HIDE_REQUEST_MOVIE_POPULAR));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_MOVIE_POPULAR));
    }
  };
};

export const getMovieTopRatedAction = (page) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_MOVIE_TOP_RATED));
    try {
      const { data } = await movieManager.getMovieTopRate(page);
      await dispatch(createAction(GET_LIST_MOVIE_TOP_RATED, data.results));
      dispatch(createAction(HIDE_REQUEST_MOVIE_TOP_RATED));
    } catch (error) {
      dispatch(createAction(HIDE_REQUEST_MOVIE_TOP_RATED));
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

export const getTVShowTopRateAction = (page) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_TVSHOW_TOP_RATED));
    try {
      const { data } = await movieManager.getTVShowTopRate(page);
      await dispatch(createAction(GET_TV_SHOW_TOP_RATE, data.results));
      dispatch(createAction(HIDE_REQUEST_TVSHOW_TOP_RATED));
    } catch (error) {
      dispatch(createAction(HIDE_REQUEST_TVSHOW_TOP_RATED));
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

export const getMovieListAction = (
  {
    page,
    releaseDateGte = "",
    releaseDateLte = "",
    rategte = "",
    ratelte = "",
    genre = "",
    language = "",
  },
  setLoading
) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieList(
        page,
        releaseDateGte,
        releaseDateLte,
        rategte,
        ratelte,
        genre,
        language
      );
      if (data.results.length > 0) {
        setLoading(false);
      }

      await dispatch(createAction(GET_MOVIE_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGenresMovieListAction = async (dispatch) => {
  try {
    const { data } = await movieManager.getGenresMovieList();
    dispatch(createAction(GET_GENRES_MOVIE_LIST, data.genres));
  } catch (error) {
    console.log(error);
  }
};

export const getGenresTVShowListAction = async (dispatch) => {
  try {
    const { data } = await movieManager.getGenresTVShowList();
    dispatch(createAction(GET_GENRES_TV_SHOW_LIST, data.genres));
  } catch (error) {
    console.log(error);
  }
};

export const getTVShowListAction = (
  {
    page,
    releaseDateGte = "",
    releaseDateLte = "",
    rategte = "",
    ratelte = "",
    genre = "",
    language = "",
  },
  setLoading
) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getTVShowList(
        page,
        releaseDateGte,
        releaseDateLte,
        rategte,
        ratelte,
        genre,
        language
      );
      if (data.results.length > 0) {
        setLoading(false);
      }
      await dispatch(createAction(GET_TV_SHOW_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};
