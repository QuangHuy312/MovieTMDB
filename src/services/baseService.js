import axios from "axios";
import { API_URL } from "../utils/settings/config";

export class baseService {
  get = (url) => {
    return axios({
      method: "GET",
      url: `${API_URL}${url}`,
    });
  };

  post = (url, info) => {
    return axios({
      url: `${API_URL}${url}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(info),
    });
  };
}
