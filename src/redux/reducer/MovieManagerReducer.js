import {
  GET_LIST_MOVIE_NOW_PLAYING,
  GET_LIST_MOVIE_POPULAR,
  GET_LIST_MOVIE_TOP_RATED,
  GET_LIST_MOVIE_UP_COMING,
  GET_TRAILER_MOVIE_POPULAR,
} from "../types/MovieManagerType";

const initialState = {
  arrMoviePopular: [],
  trailerMoviePopular: null,
  arrMovieTopRated: [],
  arrMovieNowPlaying: [],
  arrMovieUpComing: [],
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
    default:
      return state;
  }
};
