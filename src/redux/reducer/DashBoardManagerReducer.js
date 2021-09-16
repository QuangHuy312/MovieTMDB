import {
  GET_TOTAL_RATED_MOVIES,
  GET_TOTAL_RATED_TV,
} from "../types/DashBoardManagerType";

const initialState = {
  arrTotalRatedMovies: [],
  arrTotalRatedTVShow: [],
};

export const DashBoardManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_TOTAL_RATED_MOVIES: {
      state.arrTotalRatedMovies = payload;
      return { ...state };
    }
    case GET_TOTAL_RATED_TV: {
      state.arrTotalRatedTVShow = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
