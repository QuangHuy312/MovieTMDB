import {
  GET_CREATED_LIST,
  GET_LIST_FAVORITE_MOVIE,
  GET_LIST_RATED_MOVIE,
  GET_LIST_RATED_TV,
} from "../types/DashBoardManagerType";

const initialState = {
  arrListRatedMovie: [],
  arrListRatedTV: [],
  arrListFavoriteMovie: [],
  arrCreatedList: [],
};

export const DashBoardManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_LIST_RATED_MOVIE: {
      state.arrListRatedMovie = payload;
      return { ...state };
    }
    case GET_LIST_RATED_TV: {
      state.arrListRatedTV = payload;
      return { ...state };
    }

    case GET_LIST_FAVORITE_MOVIE: {
      state.arrListFavoriteMovie = payload;
      return { ...state };
    }

    case GET_CREATED_LIST: {
      state.arrCreatedList = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
