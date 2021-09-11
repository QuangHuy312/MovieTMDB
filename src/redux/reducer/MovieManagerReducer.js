import {
  GET_GENRES_MOVIE_LIST,
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FILTERED,
  GET_TRAILER_MOVIE_POPULAR,
  GET_TV_SHOW,
} from "../types/MovieManagerType";

const initialState = {
  arrMoviePopular: [],
  trailerMoviePopular: null,
  arrMovieTopRated: [],
  arrMovieNowPlaying: [],
  arrMovieUpComing: [],
  arrTVShow: [],
  arrMovieList: null,
  arrGenresMovieList: [],
  arrMovieListFilterd: [],
};
export const MovieManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_LIST_MOVIE_POPULAR: {
      state.arrMoviePopular = payload;
      return { ...state };
    }
    case GET_TRAILER_MOVIE_POPULAR: {
      state.trailerMoviePopular = payload;
      return { ...state };
    }
    case GET_LIST_MOVIE_TOP_RATED: {
      state.arrMovieTopRated = payload;
      return { ...state };
    }
    case GET_LIST_MOVIE_NOW_PLAYING: {
      state.arrMovieNowPlaying = payload;
      return { ...state };
    }
    case GET_LIST_MOVIE_UP_COMING: {
      state.arrMovieUpComing = payload;
      return { ...state };
    }
    case GET_TV_SHOW: {
      state.arrTVShow = payload;
      return { ...state };
    }

    case GET_MOVIE_LIST: {
      state.arrMovieList = payload;
      return { ...state };
    }
    case GET_GENRES_MOVIE_LIST: {
      state.arrGenresMovieList = payload;
      return { ...state };
    }
    case GET_MOVIE_LIST_FILTERED: {
      state.arrMovieListFilterd = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
