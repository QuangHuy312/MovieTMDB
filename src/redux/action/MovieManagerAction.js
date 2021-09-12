import { movieManager } from "../../services/MovieManagerService";
import { createAction } from "../action/createAction/createAction";
import {
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_TRAILER_MOVIE_POPULAR,
  GET_TV_SHOW,
  GET_MOVIE_LIST,
  GET_GENRES_MOVIE_LIST,
  GET_MOVIE_LIST_FILTERED,
  GET_TV_SHOW_LIST,
  GET_GENRES_TV_SHOW_LIST,
  GET_TV_SHOW_LIST_FILTERED,
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

export const getMovieListAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieList(page);
      dispatch(createAction(GET_MOVIE_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieListFilteredAction = (
  page,
  releaseDateGte = "",
  releaseDateLte = "",
  rategte = "",
  ratelte = "",
  genre = "",
  language = ""
) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getMovieListFiltered(
        page,
        releaseDateGte,
        releaseDateLte,
        rategte,
        ratelte,
        genre,
        language
      );
      dispatch(createAction(GET_MOVIE_LIST_FILTERED, data));
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

export const getTVShowListAction = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getTVShowList(page);
      dispatch(createAction(GET_TV_SHOW_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTVShowListFilteredAction = (
  page,
  fisrtAirDateGte = "",
  firstAirDateLte = "",
  rategte = "",
  ratelte = "",
  genre = "",
  language = ""
) => {
  return async (dispatch) => {
    try {
      const { data } = await movieManager.getTVShowListFiltered(
        page,
        fisrtAirDateGte,
        firstAirDateLte,
        rategte,
        ratelte,
        genre,
        language
      );
      dispatch(createAction(GET_TV_SHOW_LIST_FILTERED, data));
    } catch (error) {
      console.log(error);
    }
  };
};
