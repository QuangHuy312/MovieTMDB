import { createAction } from "./createAction/createAction";
import {
  GET_BANNER_TV_SHOW,
  GET_CREDIT_TV_SHOW,
  GET_PHOTOS_TV_SHOW,
  GET_RECOMMEND_TV_SHOW,
  GET_REVIEWS_TV_SHOW,
  GET_SIMILAR_TV_SHOW,
} from "../types/DetailManagerType";
import { detailManager } from "../../services/TVShowDetailManagerService";

export const getDetailBannerTvShowAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getBannerTvShow(id);
      dispatch(createAction(GET_BANNER_TV_SHOW, data));
    } catch (error) {
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
    try {
      const { data } = await detailManager.getSimilarTvShow(id);
      dispatch(createAction(GET_SIMILAR_TV_SHOW, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailRecommendTvShowAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getRecommendTVShow(id);
      dispatch(createAction(GET_RECOMMEND_TV_SHOW, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailReviewsTvShowAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getReviewsTvShow(id);
      dispatch(createAction(GET_REVIEWS_TV_SHOW, data.results));
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
};
