import axios from "axios";
import { API_URL } from "../utils/settings/config";

export class baseService {
  get = (url) => {
    return axios({
      method: "GET",
      url: `${API_URL}${url}`,
    });
  };

  postToken = (url, info) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(info),
    });
  };
  postSessionId = (url, info) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ request_token: info }),
    });
  };
}
