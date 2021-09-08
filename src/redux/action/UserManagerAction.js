import { userService } from "../../services/UserManagerService";

export const UserManagerAction = (info) => {
  return async (dispatch) => {
    try {
      // const requestToken = await dispatch(fetchRequestToken);
      // const infoUser = { ...info, requestToken };
      // const thongTin = JSON.stringify(infoUser);
      // console.log(thongTin);
      const res = await userService.userLogin(info);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fetchRequestToken = async (dispatch) => {
//   try {
//     const { data } = await userService.fetchRequestToken();
//     return data.request_token;
//   } catch (error) {
//     console.log(error);
//   }
// };
