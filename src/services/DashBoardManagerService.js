import { API_KEY, GUEST_SESSION_ID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class DashBoardManagerService extends baseService {
  userRatingMovie = (movieId, sesstionId, rate) => {
    return this.postUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`,
      rate
    );
  };

  deleteRatingMovie = (movieId, sesstionId) => {
    return this.deleteUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`
    );
  };

  userRatingTV = (movieId, sesstionId, rate) => {
    return this.postUserRating(
      `tv/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`,
      rate
    );
  };

  deleteRatingTV = (movieId, sesstionId) => {
    return this.deleteUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`
    );
  };

  addToWatchList = (accountId, sesstionId, movieId, action) => {
    return this.postAddWatchList(
      `account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sesstionId}`,
      movieId,
      action
    );
  };

  addToFavourite = (accountId, sesstionId, movieId, action) => {
    return this.postAddToFavourite(
      `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sesstionId}`,
      movieId,
      action
    );
  };

  getRatedMovies = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/movies?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&page=${page}`
    );
  };

  getRatedTV = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/tv?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&page=${page}`
    );
  };
}
export const dashBoardService = new DashBoardManagerService();
