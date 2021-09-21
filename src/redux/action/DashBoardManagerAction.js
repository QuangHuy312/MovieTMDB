import { dashBoardService } from "../../services/DashBoardManagerService";
import {
  DETELE_LIST_SEARCH,
  GET_CREATED_LIST,
  GET_DETAILS_LIST,
  GET_LIST_FAVORITE_MOVIE,
  GET_LIST_RATED_MOVIE,
  GET_LIST_RATED_TV,
  GET_LIST_SEARCH,
} from "../types/DashBoardManagerType";
import { createAction } from "./createAction/createAction";

export const getRatedMovieListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedMoviesList(
        accountId,
        sessionId,
        page
      );
      var arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedMoviesList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }
        dispatch(createAction(GET_LIST_RATED_MOVIE, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRatedTVShowListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedTVList(
        accountId,
        sessionId,
        page
      );
      var arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedTVList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }
        dispatch(createAction(GET_LIST_RATED_TV, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavoriteMovieListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getFavoriteMovieList(
        accountId,
        sessionId,
        page
      );
      var arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getFavoriteMovieList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }

        dispatch(createAction(GET_LIST_FAVORITE_MOVIE, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCreatedListAction = (accountId, sessionId) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getCreatedList(
        accountId,
        sessionId
      );
      dispatch(createAction(GET_CREATED_LIST, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addMovieToListAction = (listId, sessionId, movieId, success) => {
  return async (dispatch) => {
    try {
      await dashBoardService.addMovieToList(listId, sessionId, movieId);
      success("Item Added");
      await dispatch(getDetailsListAction(listId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailsListAction = (listId) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getDetailsList(listId);
      dispatch(createAction(GET_DETAILS_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewListAction = (sessionId, val, success, callback) => {
  return async () => {
    try {
      const { data } = await dashBoardService.createNewList(sessionId, val);
      success("Your List have been successfully saved");
      await callback(data.list_id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchMovieAction = (val) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.searchMovie(val);
      console.log(data.results);
      dispatch(createAction(GET_LIST_SEARCH, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSearchMovieAction = (val) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.searchMovie(val);
      dispatch(createAction(DETELE_LIST_SEARCH, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMovieFromListAction = (
  listId,
  sessionId,
  movieId,
  success
) => {
  return async (dispatch) => {
    try {
      await dashBoardService.deleteMovieFromList(listId, sessionId, movieId);
      await dispatch(getDetailsListAction(listId));
      await success("Item Deleted");
    } catch (error) {
      console.log(error);
    }
  };
};
