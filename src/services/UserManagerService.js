import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  fetchUserLogin = (info) => {
    return this.postToken(
      `authentication/token/validate_with_login?api_key=${API_KEY}`,
      info
    );
  };

  fetchRequestToken = () => {
    return this.get(`authentication/token/new?api_key=${API_KEY}`);
  };

  fetchSessionId = (token) => {
    return this.postSessionId(
      `authentication/session/new?api_key=${API_KEY}`,
      token
    );
  };

  fetchInfoUser = (id) => {
    return this.get(`account?api_key=${API_KEY}&session_id=${id}`);
  };
}
export const userService = new UserManagerService();
