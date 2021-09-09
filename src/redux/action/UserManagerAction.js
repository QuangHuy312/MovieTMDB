import { userService } from "../../services/UserManagerService";
import { createAction } from "./createAction/createAction";

import { GET_INFO_USER_ID } from "../types/UserManagerType";

export const UserManagerAction = (info, success) => {
  return async (dispatch) => {
    try {
      const requestToken = await dispatch(fetchRequestToken);
      const infoUser = { ...info, request_token: requestToken };
      const { data } = await userService.fetchUserLogin(infoUser);
      if (data.success) {
        const sessionId = await dispatch(fetchSessionIdUser(requestToken));
        localStorage.setItem("user", JSON.stringify(infoUser));
        localStorage.setItem("sessionId", sessionId);
        success();
      } else {
        alert("Username or PassWord is inValid");
      }
    } catch (error) {
      alert("Username or PassWord is inValid");
      console.log(error);
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
