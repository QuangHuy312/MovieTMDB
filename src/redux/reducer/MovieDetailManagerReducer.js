import {
  GET_DETAIL_BANNER_MOVIE,
  GET_CREDIT_MOVIE,
  GET_PHOTOS_MOVIE,
  GET_RECOMMEND_MOVIE,
  GET_REVIEWS_MOVIE,
  GET_SIMILAR_MOVIE,
} from "../types/DetailManagerType";

const initialState = {
  detailPhotosMovie: {},
  detailCreditMovie: {},
  detailSimilarMovie: [],
  detailReviewsMovie: [],
  detailBannerMovie: {},
  detailRecommendMovie: [],
};
export const MovieDetailManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_DETAIL_BANNER_MOVIE: {
      state.detailBannerMovie = payload;
      return { ...state };
    }
    case GET_PHOTOS_MOVIE: {
      state.detailPhotosMovie = payload;
      return { ...state };
    }
    case GET_CREDIT_MOVIE: {
      state.detailCreditMovie = payload;
      return { ...state };
    }
    case GET_SIMILAR_MOVIE: {
      state.detailSimilarMovie = payload;
      return { ...state };
    }
    case GET_REVIEWS_MOVIE: {
      state.detailReviewsMovie = payload;
      return { ...state };
    }
    case GET_RECOMMEND_MOVIE: {
      state.detailRecommendMovie = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
