import { API_KEY, GUEST_SESSION_ID } from "../utils/settings/config";
import { baseService } from "./baseService";

export class DashBoardManagerService extends baseService {
  userRatingMovie = (movieId, sesstionId, rate) => {
    return this.postUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`,
      rate
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

  deleteRatingMovie = (movieId, sesstionId) => {
    return this.deleteUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${GUEST_SESSION_ID}&session_id=${sesstionId}`
    );
  };
}
export const dashBoardService = new DashBoardManagerService();
