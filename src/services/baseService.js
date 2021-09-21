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

  postUserRating = (url, rate) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ value: rate }),
    });
  };

  postInfoMovie = (url, movieId, action) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        watchlist: action,
      }),
    });
  };

  postAddToFavourite = (url, movieId, action) => {
    return axios({
      method: "POST",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: action,
      }),
    });
  };

  deleteUserRating = (url, rate) => {
    return axios({
      method: "DELETE",
      url: `${API_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}
