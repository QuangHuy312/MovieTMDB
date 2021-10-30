import { detailManager } from "../../services/MovieDetailManagerService";
import { createAction } from "./createAction/createAction";
import {
  GET_DETAIL_BANNER_MOVIE,
  GET_CREDIT_MOVIE,
  GET_PHOTOS_MOVIE,
  GET_RECOMMEND_MOVIE,
  GET_REVIEWS_MOVIE,
  GET_SIMILAR_MOVIE,
  FETCH_REQUEST_DETAIL_BANNER_MOVIE,
  HIDE_REQUEST_DETAIL_BANNER_MOVIE,
  FETCH_REQUEST_DETAIL_REVIEWS_MOVIE,
  HIDE_REQUEST_DETAIL_REVIEWS_MOVIE,
  FETCH_REQUEST_DETAIL_SIMILAR_MOVIE,
  HIDE_REQUEST_DETAIL_SIMILAR_MOVIE,
  FETCH_REQUEST_DETAIL_RECOMMEND_MOVIE,
  HIDE_REQUEST_DETAIL_RECOMMEND_MOVIE,
} from "../types/DetailManagerType";

export const getDetailBannerMovieAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_BANNER_MOVIE));
    try {
      const { data } = await detailManager.getBannerMovie(id);
      await dispatch(createAction(GET_DETAIL_BANNER_MOVIE, data));
      dispatch(createAction(HIDE_REQUEST_DETAIL_BANNER_MOVIE));
    } catch (error) {
      dispatch(createAction(HIDE_REQUEST_DETAIL_BANNER_MOVIE));
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
    dispatch(createAction(FETCH_REQUEST_DETAIL_SIMILAR_MOVIE));
    try {
      const { data } = await detailManager.getSimilarMovie(id);
      await dispatch(createAction(GET_SIMILAR_MOVIE, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_SIMILAR_MOVIE));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_SIMILAR_MOVIE));
    }
  };
};

export const getDetailRecommendMovieAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_RECOMMEND_MOVIE));
    try {
      const { data } = await detailManager.getRecommendMovie(id);
      await dispatch(createAction(GET_RECOMMEND_MOVIE, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_RECOMMEND_MOVIE));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_RECOMMEND_MOVIE));
    }
  };
};

export const getDetailReviewsMovieAction = (id) => {
  return async (dispatch) => {
    dispatch(createAction(FETCH_REQUEST_DETAIL_REVIEWS_MOVIE));
    try {
      const { data } = await detailManager.getReviewsMovie(id);
      await dispatch(createAction(GET_REVIEWS_MOVIE, data.results));
      dispatch(createAction(HIDE_REQUEST_DETAIL_REVIEWS_MOVIE));
    } catch (error) {
      console.log(error);
      dispatch(createAction(HIDE_REQUEST_DETAIL_REVIEWS_MOVIE));
    }
  };
};
