import { dashBoardService } from "../../services/DashBoardManagerService";
import {
  GET_TOTAL_RATED_MOVIES,
  GET_TOTAL_RATED_TV,
} from "../types/DashBoardManagerType";
import { createAction } from "./createAction/createAction";

export const postRatingMovieAction = (movieId, sessionId, rate, success) => {
  return async () => {
    try {
      await dashBoardService.userRatingMovie(movieId, sessionId, rate);
      success("Your rating has been saved");
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteRatingMovieAction = (movieId, sessionId, success) => {
  return async () => {
    try {
      await dashBoardService.deleteRatingMovie(movieId, sessionId);
      success("Delete is successfully");
    } catch (error) {
      console.log(error);
    }
  };
};

export const postRatingTVAction = (movieId, sessionId, rate, success) => {
  return async () => {
    try {
      await dashBoardService.userRatingTV(movieId, sessionId, rate);
      success("Your rating has been saved");
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRatingTVAction = (movieId, sessionId, success) => {
  return async () => {
    try {
      await dashBoardService.deleteRatingTV(movieId, sessionId);
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
export const getRatedMovies = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedMovies(
        accountId,
        sessionId,
        page
      );
      var scope = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedMovies(
            accountId,
            sessionId,
            i
          );
          scope.push(...data.results);
        }
        dispatch(createAction(GET_TOTAL_RATED_MOVIES, scope));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRatedTVShow = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedTV(
        accountId,
        sessionId,
        page
      );
      var scope = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedTV(
            accountId,
            sessionId,
            i
          );
          scope.push(...data.results);
        }
        dispatch(createAction(GET_TOTAL_RATED_TV, scope));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
