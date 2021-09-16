import { dashBoardService } from "../../services/DashBoardManagerService";
import {
  GET_CREATED_LIST,
  GET_LIST_FAVORITE_MOVIE,
  GET_LIST_RATED_MOVIE,
  GET_LIST_RATED_TV,
} from "../types/DashBoardManagerType";
import { createAction } from "./createAction/createAction";

export const postRatingMovieAction = (
  movieId,
  sessionId,
  rate,
  guestSessionId,
  success,
  idUser
) => {
  return async (dispatch) => {
    try {
      await dashBoardService.userRatingMovie(
        movieId,
        sessionId,
        rate,
        guestSessionId
      );
      success("Your rating has been saved");

      await dispatch(getRatedMovieListAction(idUser, sessionId, 1));
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteRatingMovieAction = (
  movieId,
  sessionId,
  guestSessionId,

  success,
  idUser
) => {
  return async (dispatch) => {
    try {
      await dashBoardService.deleteRatingMovie(
        movieId,
        sessionId,
        guestSessionId
      );
      success("Delete is successfully");
      await dispatch(getRatedMovieListAction(idUser, sessionId, 1));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postRatingTVAction = (
  movieId,
  sessionId,
  rate,
  guestSessionId,
  success
) => {
  return async () => {
    try {
      await dashBoardService.userRatingTV(
        movieId,
        sessionId,
        rate,
        guestSessionId
      );
      success("Your rating has been saved");
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRatingTVAction = (
  movieId,
  sessionId,
  guestSessionId,
  success
) => {
  return async () => {
    try {
      await dashBoardService.deleteRatingTV(movieId, sessionId, guestSessionId);
      success("Delete is successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToWatchListAction = (
  accountId,
  sessionId,
  movieId,
  success,
  action
) => {
  return async () => {
    try {
      await dashBoardService.addToWatchList(
        accountId,
        sessionId,
        movieId,
        action
      );
      if (action) {
        success("Added to Watchlist");
      } else {
        success("Delete is successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToFavouriteAction = (
  accountId,
  sessionId,
  movieId,
  success,
  action
) => {
  return async () => {
    try {
      await dashBoardService.addToFavourite(
        accountId,
        sessionId,
        movieId,
        action
      );
      if (action) {
        success("Added to favourite");
      } else {
        success("Delete is successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
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
  return async () => {
    try {
      await dashBoardService.addMovieToList(listId, sessionId, movieId);
      success("Your rating has been saved");
    } catch (error) {
      console.log(error);
    }
  };
};
