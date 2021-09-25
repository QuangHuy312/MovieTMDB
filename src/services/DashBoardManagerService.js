import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class DashBoardManagerService extends baseService {
  // rated list
  getRatedMoviesList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/movies?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };

  getRatedTVList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/rated/tv?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };

  // favorite list
  getFavoriteMovieList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}`
    );
  };

  getFavoriteTVList = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}&language=en-US&sort_by=created_at.desc&page=${page}`
    );
  };

  // watch list
  getWatchListMovie = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/watchlist/movies?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };

  getWatchListTV = (accountId, sessionId, page) => {
    return this.get(
      `account/${accountId}/watchlist/tv?api_key=${API_KEY}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc&page=${page}`
    );
  };

  // created list
  getCreatedList = (accountId, sessionId) => {
    return this.get(
      `account/${accountId}/lists?api_key=${API_KEY}&language=en-US&session_id=${sessionId}`
    );
  };
  deleteCreatedList = (listId, sessionId) => {
    return this.delete(
      `list/${listId}?api_key=${API_KEY}&session_id=${sessionId}`
    );
  };

  // Thêm xóa sửa list
  createNewList = (sessionId, val) => {
    return this.postToken(
      `list?api_key=${API_KEY}&session_id=${sessionId}`,
      val
    );
  };

  addMovieToList = (listId, sessionId, movieId) => {
    return this.postInfoMovie(
      `list/${listId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId
    );
  };

  deleteMovieFromList = (listId, sessionId, type, movieId) => {
    return this.postInfoMovie(
      `list/${listId}/remove_item?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId,
      type
    );
  };

  // Detail
  getDetailsList = (listId) => {
    return this.get(`/list/${listId}?api_key=${API_KEY}&language=en-US`);
  };

  searchMovie = (val, page) => {
    return this.get(
      `search/multi?api_key=${API_KEY}&language=en-US&query=${val}&page=${page}`
    );
  };
}
export const dashBoardService = new DashBoardManagerService();
