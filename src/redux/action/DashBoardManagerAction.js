import { dashBoardService } from "../../services/DashBoardManagerService";

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
