import { useSnackbar } from "notistack";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addMovieToListAction } from "../../../../redux/action/DashBoardManagerAction";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingTVAction,
  postRatingTVAction,
} from "../../../../redux/action/UserManagerAction";
import ContentList from "../../ContentList/ContentList";

const TVShow = ({ arrListTV, arrCreatedList, sessionId, infoUser }) => {
  const dispatch = useDispatch();
  const { guestSessionId } = useSelector((state) => state.UserManagerReducer);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClick = () => {
    console.log(123);
  };

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
        true
      )
    );
  };

  const handleClickRemoveFavorite = (type, movieId) => {
    dispatch(
      addToFavouriteAction(
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
  };

  // Hiện tại api ko có phần add tv vô list , nên mặc định nó add Movie và lấy idList là idMovie
  const handleClickAddToList = (listId, movieId) => {
    dispatch(
      addMovieToListAction(listId, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  return (
    <Fragment>
      {arrListTV.map((infoTV) => {
        return (
          <Fragment key={infoTV.id}>
            <ContentList
              contentList={infoTV}
              handleClick={handleClick}
              handleClickRating={handleClickRating}
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
  );
};

export default memo(TVShow);
