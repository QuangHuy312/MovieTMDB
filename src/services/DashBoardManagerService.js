import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class DashBoardManagerService extends baseService {
  userRatingMovie = (movieId, sessionId, rate, guestSessionId) => {
    return this.postUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`,
      rate
    );
  };

  deleteRatingMovie = (movieId, sessionId, guestSessionId) => {
    return this.deleteUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`
    );
  };

  getRatedMoviesList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/movies?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };

  userRatingTV = (movieId, sessionId, rate, guestSessionId) => {
    return this.postUserRating(
      `tv/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`,
      rate
    );
  };

  deleteRatingTV = (movieId, sessionId, guestSessionId) => {
    return this.deleteUserRating(
      `movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}&session_id=${sessionId}`
    );
  };

  getRatedTVList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/tv?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };
  addToWatchList = (accountId, sessionId, movieId, action) => {
    return this.postAddWatchList(
      `account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId,
      action
    );
  };

  addToFavourite = (accountId, sessionId, movieId, action) => {
    return this.postAddToFavourite(
      `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId,
      action
    );
  };

  getFavoriteMovieList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}`
    );
  };

  getCreatedList = (accountId, sessionId) => {
    return this.get(
      `account/${accountId}/lists?api_key=${API_KEY}&language=en-US&session_id=${sessionId}`
    );
  };

  addMovieToList = (listId, sessionId, movieId) => {
    return this.postAddWatchList(
      `list/${listId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId
    );
  };
}
export const dashBoardService = new DashBoardManagerService();
