import { userService } from "../../services/UserManagerService";
import { GET_GUEST_SESSION, GET_INFO_USER_ID } from "../types/UserManagerType";
import { createAction } from "./createAction/createAction";
import { getRatedMovieListAction } from "./DashBoardManagerAction";

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
  idUser
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
      await userService.deleteRatingMovie(movieId, sessionId, guestSessionId);
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
      await userService.userRatingTV(movieId, sessionId, rate, guestSessionId);
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
      await userService.deleteRatingTV(movieId, sessionId, guestSessionId);
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
      await userService.addToWatchList(accountId, sessionId, movieId, action);
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
      await userService.addToFavourite(accountId, sessionId, movieId, action);
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
