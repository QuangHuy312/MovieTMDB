import {
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_DETAIL_MOVIE,
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
  detailMovie: {},
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
    case GET_DETAIL_MOVIE: {
      state.detailMovie = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
