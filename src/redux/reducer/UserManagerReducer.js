import { GET_INFO_USER_ID } from "../types/UserManagerType";

const initialState = {
  infoUser: {},
};
export const UserManagerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_INFO_USER_ID: {
      state.infoUser = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
