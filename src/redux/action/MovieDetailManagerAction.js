import { detailManager } from "../../services/MovieDetailManagerService";
import { createAction } from "./createAction/createAction";
import {
  GET_BANNER_MOVIE,
  GET_CREDIT_MOVIE,
  GET_PHOTOS_MOVIE,
  GET_RECOMMEND_MOVIE,
  GET_REVIEWS_MOVIE,
  GET_SIMILAR_MOVIE,
} from "../types/DetailManagerType";

export const getDetailBannerMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getBannerMovie(id);
      dispatch(createAction(GET_BANNER_MOVIE, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailPhotoMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getPhotosMovie(id);
      dispatch(createAction(GET_PHOTOS_MOVIE, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailCreditMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getCreditMovie(id);
      dispatch(createAction(GET_CREDIT_MOVIE, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailSimilarMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getSimilarMovie(id);
      dispatch(createAction(GET_SIMILAR_MOVIE, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailRecommendMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getRecommendMovie(id);
      dispatch(createAction(GET_RECOMMEND_MOVIE, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailReviewsMovieAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await detailManager.getReviewsMovie(id);
      dispatch(createAction(GET_REVIEWS_MOVIE, data.results));
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };
};
