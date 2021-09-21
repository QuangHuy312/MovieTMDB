import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class DashBoardManagerService extends baseService {
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
  deleteCreatedList = (listId, sessionId) => {
    return this.delete(
      `list/${listId}?api_key=${API_KEY}&session_id=${sessionId}`
    );
  };

  addMovieToList = (listId, sessionId, movieId) => {
    return this.postInfoMovie(
      `list/${listId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId
    );
  };

  getDetailsList = (listId) => {
    return this.get(`/list/${listId}?api_key=${API_KEY}&language=en-US`);
  };

  createNewList = (sessionId, val) => {
    return this.postToken(
      `list?api_key=${API_KEY}&session_id=${sessionId}`,
      val
    );
  };

  searchMovie = (val, page) => {
    return this.get(
      `search/multi?api_key=${API_KEY}&language=en-US&query=${val}&page=${page}`
    );
  };

  deleteMovieFromList = (listId, sessionId, type, movieId) => {
    return this.postInfoMovie(
      `list/${listId}/remove_item?api_key=${API_KEY}&session_id=${sessionId}`,
      movieId,
      type
    );
  };
}
export const dashBoardService = new DashBoardManagerService();
