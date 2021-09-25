import {
  CHANGE_BACK_DROP_LIST,
  DETELE_LIST_SEARCH,
  GET_CREATED_LIST,
  GET_DETAILS_LIST,
  GET_LIST_FAVORITE_MOVIE,
  GET_LIST_FAVORITE_TV,
  GET_LIST_RATED_MOVIE,
  GET_LIST_RATED_TV,
  GET_LIST_SEARCH,
  GET_WATCH_LIST_MOVIE,
  GET_WATCH_LIST_TV,
} from "../types/DashBoardManagerType";

const initialState = {
  arrListRatedMovie: [],
  arrListRatedTV: [],

  arrListFavoriteMovie: [],
  arrListFavoriteTV: [],

  arrWatchListMovie: [],
  arrWatchListTV: [],

  arrListSearch: [],

  arrCreatedList: [],
  arrDetailsList: {},
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

    case GET_LIST_FAVORITE_TV: {
      state.arrListFavoriteTV = payload;
      return { ...state };
    }

    case GET_WATCH_LIST_MOVIE: {
      state.arrWatchListMovie = payload;
      return { ...state };
    }

    case GET_WATCH_LIST_TV: {
      state.arrWatchListTV = payload;
      return { ...state };
    }

    case GET_CREATED_LIST: {
      state.arrCreatedList = payload;
      return { ...state };
    }

    case GET_DETAILS_LIST: {
      state.arrDetailsList = payload;
      return { ...state };
    }

    case GET_LIST_SEARCH: {
      state.arrListSearch = payload;
      return { ...state };
    }

    case DETELE_LIST_SEARCH: {
      state.arrListSearch = [];
      return { ...state };
    }

    case CHANGE_BACK_DROP_LIST: {
      state.arrDetailsList = {
        ...state.arrDetailsList,
        backdrop_path: payload,
      };
      return { ...state };
    }
    default:
      return state;
  }
};
