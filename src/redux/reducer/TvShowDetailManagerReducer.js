import {
  GET_BANNER_TV_SHOW,
  GET_CREDIT_TV_SHOW,
  GET_PHOTOS_TV_SHOW,
  GET_RECOMMEND_TV_SHOW,
  GET_REVIEWS_TV_SHOW,
  GET_SIMILAR_TV_SHOW,
} from "../types/DetailManagerType";

const initialState = {
  detailPhotosTVShow: {},
  detailCreditTVShow: {},
  detailSimilarTVShow: [],
  detailReviewsTVShow: [],
  detailBannerTVShow: {},
  detailRecommendTVShow: [],
};
export const TVShowDetailManagerReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PHOTOS_TV_SHOW: {
      state.detailPhotosTVShow = payload;
      return { ...state };
    }
    case GET_CREDIT_TV_SHOW: {
      state.detailCreditTVShow = payload;
      return { ...state };
    }
    case GET_SIMILAR_TV_SHOW: {
      state.detailSimilarTVShow = payload;
      return { ...state };
    }
    case GET_REVIEWS_TV_SHOW: {
      state.detailReviewsTVShow = payload;
      return { ...state };
    }
    case GET_BANNER_TV_SHOW: {
      state.detailBannerTVShow = payload;
      return { ...state };
    }
    case GET_RECOMMEND_TV_SHOW: {
      state.detailRecommendTVShow = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
