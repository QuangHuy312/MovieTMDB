import { GET_GUEST_SESSION, GET_INFO_USER_ID } from "../types/UserManagerType";

const initialState = {
  infoUser: {},
  guestSessionId: null,
};
export const UserManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFO_USER_ID: {
      state.infoUser = payload;
      return { ...state };
    }
    case GET_GUEST_SESSION: {
      state.guestSessionId = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
