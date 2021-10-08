import { createAction } from "./createAction/createAction";
import {
  FETCH_REQUEST_DETAIL_BANNER_TVSHOW,
  FETCH_REQUEST_DETAIL_REVIEWS_TVSHOW,
  FETCH_REQUEST_DETAIL_RECOMMEND_TVSHOW,
  FETCH_REQUEST_DETAIL_SIMILAR_TVSHOW,
  GET_BANNER_TV_SHOW,
  GET_CREDIT_TV_SHOW,
  GET_PHOTOS_TV_SHOW,
  GET_RECOMMEND_TV_SHOW,
  GET_REVIEWS_TV_SHOW,
  GET_SIMILAR_TV_SHOW,
  HIDE_REQUEST_DETAIL_BANNER_TVSHOW,
  HIDE_REQUEST_DETAIL_REVIEWS_TVSHOW,
  HIDE_REQUEST_DETAIL_RECOMMEND_TVSHOW,
  HIDE_REQUEST_DETAIL_SIMILAR_TVSHOW,
} from "../types/DetailManagerType";
import { detailManager } from "../../services/TVShowDetailManagerService";

export const getDetailBannerTvShowAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_BANNER_TVSHOW));
    try {
      const { data } = await detailManager.getBannerTvShow(id);
      await dispatch(createAction(GET_BANNER_TV_SHOW, data));
      dispatch(createAction(HIDE_REQUEST_DETAIL_BANNER_TVSHOW));
    } catch (error) {
      dispatch(createAction(HIDE_REQUEST_DETAIL_BANNER_TVSHOW));
      console.log(error);
    }
  };
};

export const getDetailPhotoTvShowAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getPhotosTvShow(id);
      dispatch(createAction(GET_PHOTOS_TV_SHOW, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailCreditTvShowAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getCreditTvShow(id);
      dispatch(createAction(GET_CREDIT_TV_SHOW, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailSimilarTvShowAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_SIMILAR_TVSHOW));

    try {
      const { data } = await detailManager.getSimilarTvShow(id);
      await dispatch(createAction(GET_SIMILAR_TV_SHOW, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_SIMILAR_TVSHOW));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_SIMILAR_TVSHOW));
    }
  };
};

export const getDetailRecommendTvShowAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_RECOMMEND_TVSHOW));
    try {
      const { data } = await detailManager.getRecommendTVShow(id);
      await dispatch(createAction(GET_RECOMMEND_TV_SHOW, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_RECOMMEND_TVSHOW));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_RECOMMEND_TVSHOW));
    }
  };
};

export const getDetailReviewsTvShowAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_REVIEWS_TVSHOW));

    try {
      const { data } = await detailManager.getReviewsTvShow(id);
      await dispatch(createAction(GET_REVIEWS_TV_SHOW, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_REVIEWS_TVSHOW));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_REVIEWS_TVSHOW));
    }
  };
};
