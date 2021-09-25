import { userService } from "../../services/UserManagerService";
import { GET_GUEST_SESSION, GET_INFO_USER_ID } from "../types/UserManagerType";
import { createAction } from "./createAction/createAction";
import {
  getFavoriteMovieListAction,
  getFavoriteTVListAction,
  getRatedMovieListAction,
  getRatedTVShowListAction,
  getWatchListMovieAction,
  getWatchListTVAction,
} from "./DashBoardManagerAction";

export const UserManagerAction = (info, goback, success, error) => {
  return async (dispatch) => {
    try {
      const requestToken = await dispatch(fetchRequestToken);
      const infoUser = { ...info, request_token: requestToken };
      const { data } = await userService.fetchUserLogin(infoUser);
      if (data.success) {
        const sessionId = await dispatch(fetchSessionIdUser(requestToken));
        localStorage.setItem("sessionId", sessionId);
        await success("Logged in successfully");
        goback();
        await dispatch(fetchSInfoUser(sessionId));
      } else {
        error("Username or PassWord is inValid");
      }
    } catch (err) {
      error(err.response.data.status_message);
    }
  };
};

export const fetchSessionIdUser = (token) => {
  return async () => {
    try {
      const { data } = await userService.fetchSessionId(token);
      return data.session_id;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchRequestToken = async () => {
  try {
    const { data } = await userService.fetchRequestToken();
    return data.request_token;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSInfoUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await userService.fetchInfoUser(token);
      dispatch(createAction(GET_INFO_USER_ID, data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchGuestSession = async (dispatch) => {
  try {
    const { data } = await userService.fetchGuestSession();
    dispatch(createAction(GET_GUEST_SESSION, data.guest_session_id));
  } catch (error) {
    console.log(error);
  }
};
export const postRatingMovieAction = (
  movieId,
  sessionId,
  rate,
  guestSessionId,
  success,
  infoUser,
  pathname
) => {
  return async (dispatch) => {
    try {
      await userService.userRatingMovie(
        movieId,
        sessionId,
        rate,
        guestSessionId
      );
      success("Your rating has been saved");

      if (pathname === `/${infoUser.username}/ratings`) {
        await dispatch(getRatedMovieListAction(infoUser.id, sessionId, 1));
      } else if (pathname === `/${infoUser.username}/favorites`) {
        await dispatch(getFavoriteMovieListAction(infoUser.id, sessionId, 1));
      }
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
  infoUser
) => {
  return async (dispatch) => {
    try {
      await userService.deleteRatingMovie(movieId, sessionId, guestSessionId);
      success("Delete is successfully");
      await dispatch(getRatedMovieListAction(infoUser.id, sessionId, 1));
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
  success,
  infoUser,
  pathname
) => {
  return async (dispatch) => {
    try {
      await userService.userRatingTV(movieId, sessionId, rate, guestSessionId);
      success("Your rating has been saved");
      if (pathname === `/${infoUser.username}/ratings`) {
        await dispatch(getRatedTVShowListAction(infoUser.id, sessionId, 1));
      } else if (pathname === `/${infoUser.username}/favorites`) {
        await dispatch(getFavoriteTVListAction(infoUser.id, sessionId, 1));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRatingTVAction = (
  movieId,
  sessionId,
  guestSessionId,
  success,
  infoUser
) => {
  return async (dispatch) => {
    try {
      await userService.deleteRatingTV(movieId, sessionId, guestSessionId);
      success("Delete is successfully");
      await dispatch(getRatedTVShowListAction(infoUser.id, sessionId, 1));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToWatchListAction = (
  accountId,
  sessionId,
  type,
  movieId,
  success,
  action
) => {
  return async (dispatch) => {
    try {
      await userService.addToWatchList(
        accountId,
        sessionId,
        type,
        movieId,
        action
      );
      if (action) {
        success("Added to Watchlist");
      } else {
        success("Delete is successfully");
        if (type === "tv") {
          await dispatch(getWatchListTVAction(accountId, sessionId, 1));
        } else if (type === "movie") {
          await dispatch(getWatchListMovieAction(accountId, sessionId, 1));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToFavouriteAction = (
  accountId,
  sessionId,
  type,
  movieId,
  success,
  action
) => {
  return async (dispatch) => {
    try {
      await userService.addToFavourite(
        accountId,
        sessionId,
        type,
        movieId,
        action
      );
      if (action) {
        success("Added to favourite");
      } else {
        success("Delete is successfully");
        if (type === "tv") {
          await dispatch(getFavoriteTVListAction(accountId, sessionId, 1));
        } else if (type === "movie") {
          await dispatch(getFavoriteMovieListAction(accountId, sessionId, 1));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
