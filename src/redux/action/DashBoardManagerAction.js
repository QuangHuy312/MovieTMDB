import { dashBoardService } from "../../services/DashBoardManagerService";
import {
  DETELE_LIST_SEARCH,
  GET_CREATED_LIST,
  GET_DETAILS_LIST,
  GET_LIST_FAVORITE_MOVIE,
  GET_LIST_FAVORITE_TV,
  GET_LIST_RATED_MOVIE,
  GET_LIST_RATED_TV,
  GET_LIST_SEARCH,
  GET_WATCH_LIST_MOVIE,
  GET_WATCH_LIST_TV,
} from "../types/DashBoardManagerType";
import { createAction } from "./createAction/createAction";

// Rated list action

export const getRatedMovieListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedMoviesList(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedMoviesList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }
        dispatch(createAction(GET_LIST_RATED_MOVIE, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRatedTVShowListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getRatedTVList(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getRatedTVList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }
        dispatch(createAction(GET_LIST_RATED_TV, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Favorites list action

export const getFavoriteMovieListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getFavoriteMovieList(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getFavoriteMovieList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }

        dispatch(createAction(GET_LIST_FAVORITE_MOVIE, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavoriteTVListAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getFavoriteTVList(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getFavoriteTVList(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }

        dispatch(createAction(GET_LIST_FAVORITE_TV, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Watch List AcTion

export const getWatchListMovieAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getWatchListMovie(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getWatchListMovie(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }

        dispatch(createAction(GET_WATCH_LIST_MOVIE, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getWatchListTVAction = (accountId, sessionId, page) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getWatchListTV(
        accountId,
        sessionId,
        page
      );
      let arrData = [];
      if (data.total_pages > 0) {
        for (let i = 1; i <= data.total_pages; i++) {
          const { data } = await dashBoardService.getWatchListTV(
            accountId,
            sessionId,
            i
          );
          arrData.push(...data.results);
        }

        dispatch(createAction(GET_WATCH_LIST_TV, arrData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Created List Action

export const getCreatedListAction = (
  accountId,
  sessionId,
  backdrop,
  idList,
  success
) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getCreatedList(
        accountId,
        sessionId
      );
      if (backdrop) {
        const newArr = data.results.map((item) => {
          if (item.id == idList) {
            localStorage.setItem(`${item.id}`, backdrop);
            return { ...item, backdrop_path: backdrop };
          } else {
            return { ...item };
          }
        });
        dispatch(createAction(GET_CREATED_LIST, newArr));
        success("Image Saved");
      } else {
        dispatch(createAction(GET_CREATED_LIST, data.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDetailsListAction = (listId) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.getDetailsList(listId);
      dispatch(createAction(GET_DETAILS_LIST, data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Thêm , xóa , search List Action

export const addMovieToListAction = (listId, sessionId, movieId, success) => {
  return async (dispatch) => {
    try {
      await dashBoardService.addMovieToList(listId, sessionId, movieId);
      success("Item Added");
      await dispatch(getDetailsListAction(listId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewListAction = (sessionId, val, success, callback) => {
  return async () => {
    try {
      const { data } = await dashBoardService.createNewList(sessionId, val);
      success("Your List have been successfully saved");
      await callback(data.list_id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchMovieAction = (val) => {
  let newArr = [];
  return async (dispatch) => {
    try {
      // phần này api ko có check theo media type
      // nên buộc check theo movie vì api khi xóa cũng ko có xóa theo type
      const { data } = await dashBoardService.searchMovie(val, 1);
      const arrFilter = data.results.filter(
        (item) => item.media_type !== "person" && item.media_type !== "tv"
      );
      if (arrFilter.length < 20) {
        const { data } = await dashBoardService.searchMovie(val, 2);
        const newArr2 = data.results.filter(
          (item) => item.media_type !== "person" && item.media_type !== "tv"
        );
        newArr = [...arrFilter.concat(newArr2)].splice(0, 20);
        dispatch(createAction(GET_LIST_SEARCH, newArr));
      } else {
        dispatch(createAction(GET_LIST_SEARCH, arrFilter));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSearchMovieAction = (val) => {
  return async (dispatch) => {
    try {
      const { data } = await dashBoardService.searchMovie(val);
      dispatch(createAction(DETELE_LIST_SEARCH, data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMovieFromListAction = (
  listId,
  sessionId,
  type,
  movieId,
  success
) => {
  return async (dispatch) => {
    try {
      await dashBoardService.deleteMovieFromList(
        listId,
        sessionId,
        type,
        movieId
      );

      await dispatch(getDetailsListAction(listId));
      await success("Item Deleted");
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCreatedListAction = (
  listId,
  sessionId,
  success,
  accountId
) => {
  return async (dispatch) => {
    try {
      await dashBoardService.deleteCreatedList(listId, sessionId);
      // dispatch(getCreatedListAction(accountId, sessionId));
      // success("This List Deleted");
    } catch (error) {
      // console.log(error.response);
      // Khúc này api tạm bị lỗi và admin chưa khắc phục dc
      // khi call nhưng bị lỗi mà list vận dc xóa thành công
      // phải refresh lại mới thấy dc , nên dùng tạm cách này
      if (error.response.data.status_code === 11) {
        dispatch(getCreatedListAction(accountId, sessionId));
        success("This List Deleted");
      }
    }
  };
};
