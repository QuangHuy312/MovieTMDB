import {
  FETCH_REQUEST_CREATED_LIST,
  FETCH_REQUEST_DETAIL_LIST,
  FETCH_REQUEST_RATED_MOVIE_LIST,
  FETCH_REQUEST_RATED_TVSHOW_LIST,
  HIDE_REQUEST_CREATED_LIST,
  HIDE_REQUEST_DETAIL_LIST,
  HIDE_REQUEST_RATED_MOVIE_LIST,
  HIDE_REQUEST_RATED_TVSHOW_LIST,
} from "../types/DashBoardManagerType";
import {
  FETCH_REQUEST_DETAIL_BANNER_MOVIE,
  FETCH_REQUEST_DETAIL_BANNER_TVSHOW,
  FETCH_REQUEST_DETAIL_RECOMMEND_MOVIE,
  FETCH_REQUEST_DETAIL_RECOMMEND_TVSHOW,
  FETCH_REQUEST_DETAIL_REVIEWS_MOVIE,
  FETCH_REQUEST_DETAIL_REVIEWS_TVSHOW,
  FETCH_REQUEST_DETAIL_SIMILAR_MOVIE,
  FETCH_REQUEST_DETAIL_SIMILAR_TVSHOW,
  HIDE_REQUEST_DETAIL_BANNER_MOVIE,
  HIDE_REQUEST_DETAIL_BANNER_TVSHOW,
  HIDE_REQUEST_DETAIL_RECOMMEND_MOVIE,
  HIDE_REQUEST_DETAIL_RECOMMEND_TVSHOW,
  HIDE_REQUEST_DETAIL_REVIEWS_MOVIE,
  HIDE_REQUEST_DETAIL_REVIEWS_TVSHOW,
  HIDE_REQUEST_DETAIL_SIMILAR_MOVIE,
  HIDE_REQUEST_DETAIL_SIMILAR_TVSHOW,
} from "../types/DetailManagerType";
import {
  FETCH_REQUEST_MOVIE_POPULAR,
  FETCH_REQUEST_MOVIE_TOP_RATED,
  FETCH_REQUEST_TVSHOW_TOP_RATED,
  HIDE_REQUEST_MOVIE_POPULAR,
  HIDE_REQUEST_MOVIE_TOP_RATED,
  HIDE_REQUEST_TVSHOW_TOP_RATED,
} from "../types/MovieManagerType";
import {
  FETCH_USER_LOADING,
  HIDE_USER_LOADING,
} from "../types/UserManagerType";

const initialState = {
  userLoading: false,

  arrMoviePopularLoading: false,
  arrMovieTopratedLoading: false,
  arrTVShowTopRatedLoading: false,

  arrMovieListLoading: false,
  arrTVShowListLoading: false,

  arrDetailBannerMovieLoading: false,
  arrDetailReviewsMovieLoading: false,
  arrDetailSimilarMovieLoading: false,
  arrDetailRecommendMovieLoading: false,

  arrDetailBannerTVShowLoading: false,
  arrDetailReviewsTVShowLoading: false,
  arrDetailSimilarTVShowLoading: false,
  arrDetailRecommendTVShowLoading: false,

  arrDetailListLoading: false,
  arrCreatedListLoading: false,

  arrMovieRatedListLoading: false,
  arrTVShowRatedListLoading: false,
};

export const LoadingReducer = (state = initialState, { type }) => {
  switch (type) {
    // User
    case FETCH_USER_LOADING: {
      state.userLoading = true;
      return { ...state };
    }
    case HIDE_USER_LOADING: {
      state.userLoading = false;
      return { ...state };
    }

    // Home Page
    case FETCH_REQUEST_MOVIE_POPULAR: {
      state.arrMoviePopularLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_MOVIE_POPULAR: {
      state.arrMoviePopularLoading = false;
      return { ...state };
    }
    case FETCH_REQUEST_MOVIE_TOP_RATED: {
      state.arrMovieTopratedLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_MOVIE_TOP_RATED: {
      state.arrMovieTopratedLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_TVSHOW_TOP_RATED: {
      state.arrTVShowTopRatedLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_TVSHOW_TOP_RATED: {
      state.arrTVShowTopRatedLoading = false;
      return { ...state };
    }

    //Detail Movie

    case FETCH_REQUEST_DETAIL_BANNER_MOVIE: {
      state.arrDetailBannerMovieLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_BANNER_MOVIE: {
      state.arrDetailBannerMovieLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_SIMILAR_MOVIE: {
      state.arrDetailSimilarMovieLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_SIMILAR_MOVIE: {
      state.arrDetailSimilarMovieLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_REVIEWS_MOVIE: {
      state.arrDetailReviewsMovieLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_REVIEWS_MOVIE: {
      state.arrDetailReviewsMovieLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_RECOMMEND_MOVIE: {
      state.arrDetailRecommendMovieLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_RECOMMEND_MOVIE: {
      state.arrDetailRecommendMovieLoading = false;
      return { ...state };
    }

    //Detai TVShow

    case FETCH_REQUEST_DETAIL_BANNER_TVSHOW: {
      state.arrDetailBannerTVShowLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_BANNER_TVSHOW: {
      state.arrDetailBannerTVShowLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_SIMILAR_TVSHOW: {
      state.arrDetailSimilarTVShowLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_SIMILAR_TVSHOW: {
      state.arrDetailSimilarTVShowLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_REVIEWS_TVSHOW: {
      state.arrDetailReviewsTVShowLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_REVIEWS_TVSHOW: {
      state.arrDetailReviewsTVShowLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_DETAIL_RECOMMEND_TVSHOW: {
      state.arrDetailRecommendTVShowLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_RECOMMEND_TVSHOW: {
      state.arrDetailRecommendTVShowLoading = false;
      return { ...state };
    }

    // DashBoard

    //Detail List
    case FETCH_REQUEST_DETAIL_LIST: {
      state.arrDetailListLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_DETAIL_LIST: {
      state.arrDetailListLoading = false;
      return { ...state };
    }

    // Created List
    case FETCH_REQUEST_CREATED_LIST: {
      state.arrCreatedListLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_CREATED_LIST: {
      state.arrCreatedListLoading = false;
      return { ...state };
    }

    //Info circle rating
    case FETCH_REQUEST_RATED_MOVIE_LIST: {
      state.arrMovieRatedListLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_RATED_MOVIE_LIST: {
      state.arrMovieRatedListLoading = false;
      return { ...state };
    }

    case FETCH_REQUEST_RATED_TVSHOW_LIST: {
      state.arrTVShowRatedListLoading = true;
      return { ...state };
    }
    case HIDE_REQUEST_RATED_TVSHOW_LIST: {
      state.arrTVShowRatedListLoading = false;
      return { ...state };
    }
    default:
      return state;
  }
};
