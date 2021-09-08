import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  userLogin = (info) => {
    return this.post(
      `authentication/token/validate_with_login?api_key=${API_KEY}`,
      info
    );
  };

  fetchRequestToken = () => {
    return this.get(`authentication/token/new?api_key=${API_KEY}`);
  };
}
export const userService = new UserManagerService();
