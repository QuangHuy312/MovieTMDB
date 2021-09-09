import { userService } from "../../services/UserManagerService";
import { createAction } from "./createAction/createAction";

import { GET_INFO_USER_ID } from "../types/UserManagerType";

export const UserManagerAction = (info, goback, success, error) => {
  return async (dispatch) => {
    try {
      const requestToken = await dispatch(fetchRequestToken);
      const infoUser = { ...info, request_token: requestToken };
      const { data } = await userService.fetchUserLogin(infoUser);
      if (data.success) {
        const sessionId = await dispatch(fetchSessionIdUser(requestToken));
        localStorage.setItem("user", JSON.stringify(infoUser));
        localStorage.setItem("sessionId", sessionId);
        await success("Logged in successfully");
        goback();
      } else {
        error("Username or PassWord is inValid");
      }
    } catch (err) {
      error(err.response.data.status_message);
    }
  };
};

export const fetchSessionIdUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await userService.fetchSessionId(token);
      return data.session_id;
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchRequestToken = async (dispatch) => {
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
