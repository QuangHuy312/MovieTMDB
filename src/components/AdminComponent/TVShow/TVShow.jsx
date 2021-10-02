import { Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addMovieToListAction } from "../../../redux/action/DashBoardManagerAction";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingTVAction,
  postRatingTVAction,
} from "../../../redux/action/UserManagerAction";
import ContentList from "../ContentList/ContentList";

const TVShow = ({
  arrListTV,
  arrCreatedList,
  arrListRatedTV,
  sessionId,
  infoUser,
  arrListFavoriteTV,
}) => {
  const dispatch = useDispatch();
  const { guestSessionId } = useSelector((state) => state.UserManagerReducer);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClickRating = (id, valueRating) => {
    dispatch(
      postRatingTVAction(
        id,
        sessionId,
        valueRating,
        guestSessionId,

        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        infoUser,
        pathname
      )
    );
  };

  const handleClickClearRating = (id) => {
    dispatch(
      deleteRatingTVAction(
        id,
        sessionId,
        guestSessionId,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        infoUser,
        pathname
      )
    );
  };

  const handleRemove = (type, movieId) => {
    if (pathname === `/${infoUser.username}/ratings`) {
      dispatch(
        deleteRatingTVAction(
          movieId,
          sessionId,
          guestSessionId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser
        )
      );
    } else if (pathname === `/${infoUser.username}/favorites`) {
      dispatch(
        addToFavouriteAction(
          infoUser,
          sessionId,
          type,
          movieId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false
        )
      );
    } else if (pathname === `/${infoUser.username}/watchlist`) {
      dispatch(
        addToWatchListAction(
          infoUser.id,
          sessionId,
          type,
          movieId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false
        )
      );
    }
  };

  const handleClickAddFavorite = (type, movieId) => {
    dispatch(
      addToFavouriteAction(
        infoUser,
        sessionId,
        type,
        movieId,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        true,
        pathname
      )
    );
  };

  const handleClickRemoveFavorite = (type, movieId) => {
    dispatch(
      addToFavouriteAction(
        infoUser,
        sessionId,
        type,
        movieId,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        false,
        pathname
      )
    );
  };

  // Hiện tại api ko có phần add tv vô list , nên mặc định nó add Movie và lấy idList là idMovie
  const handleClickAddToList = (listId, movieId) => {
    dispatch(
      addMovieToListAction(listId, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };

  arrListTV?.forEach((movie, index) => {
    const idxFavorites = arrListFavoriteTV?.findIndex(
      (item) => item.id === movie.id
    );
    const idxRated = arrListRatedTV?.findIndex((item) => item.id === movie.id);
    if (idxFavorites > -1) {
      arrListTV[index].favorite = true;
    }
    if (idxRated > -1) {
      arrListTV[index].rating = arrListRatedTV[idxRated].rating;
    }
  });
  return (
    <Fragment>
      {arrListTV.length > 0 ? (
        <Fragment>
          {arrListTV.map((infoTV) => {
            return (
              <Fragment key={infoTV.id}>
                <ContentList
                  contentList={infoTV}
                  handleClickRating={handleClickRating}
                  handleClickClearRating={handleClickClearRating}
                  handleRemove={handleRemove}
                  handleClickAddFavorite={handleClickAddFavorite}
                  handleClickRemoveFavorite={handleClickRemoveFavorite}
                  infoUser={infoUser}
                  arrCreatedList={arrCreatedList}
                  handleClickAddToList={handleClickAddToList}
                  media_type="tv"
                />
              </Fragment>
            );
          })}
        </Fragment>
      ) : (
        <Typography varitant="body1">You haven't added any tvshows</Typography>
      )}
    </Fragment>
  );
};

export default memo(TVShow);
