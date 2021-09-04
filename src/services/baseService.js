import axios from "axios";
import { API_URL } from "../utils/settings/config";

export class baseService {
  get = (url) => {
    return axios({
      method: "GET",
      url: `${API_URL}${url}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
  };

  post = (url, data) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      data: data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
  };
}
