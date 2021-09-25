import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class UserManagerService extends baseService {
  fetchRequestToken = () => {
    return this.get(`authentication/token/new?api_key=${API_KEY}`);
  };

  fetchInfoUser = (id) => {
    return this.get(`account?api_key=${API_KEY}&session_id=${id}`);
  };

  fetchGuestSession = () => {
    return this.get(`authentication/guest_session/new?api_key=${API_KEY}`);
  };

  fetchUserLogin = (info) => {
    return this.postToken(
      `authentication/token/validate_with_login?api_key=${API_KEY}`,
      info
    );
  };

  fetchSessionId = (token) => {
    return this.postSessionId(
      `authentication/session/new?api_key=${API_KEY}`,
      token
    );
  };

  userRatingMovie = (movieId, sessionId, rate, guestSessionId) => {
    return this.postUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`,
      rate
    );
  };

  deleteRatingMovie = (movieId, sessionId, guestSessionId) => {
    return this.delete(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`
    );
  };

  userRatingTV = (movieId, sessionId, rate, guestSessionId) => {
    return this.postUserRating(
      `tv/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`,
      rate
    );
  };

  deleteRatingTV = (tvId, sessionId, guestSessionId) => {
    return this.delete(
      `tv/${tvId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`
    );
  };

  addToWatchList = (accountId, sessionId, type, movieId, action) => {
    return this.postInfoMovie(
      `account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId,
      type,
      action
    );
  };

  addToFavourite = (accountId, sessionId, type, movieId, action) => {
    return this.postAddToFavourite(
      `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
      type,
      movieId,
      action
    );
  };
}
export const userService = new UserManagerService();
