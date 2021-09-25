import { useSnackbar } from "notistack";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingMovieAction,
  postRatingMovieAction,
} from "../../../../redux/action/UserManagerAction";
import { addMovieToListAction } from "../../../../redux/action/DashBoardManagerAction";
import ContentList from "../../ContentList/ContentList";
import { useLocation } from "react-router";

const Movies = ({ arrListMovie, arrCreatedList, sessionId, infoUser }) => {
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
      postRatingMovieAction(
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
        deleteRatingMovieAction(
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
        infoUser.id,
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

  const handleClickAddToList = (listId, movieId) => {
    dispatch(
      addMovieToListAction(listId, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  return (
    <Fragment>
      {arrListMovie.map((infoMovie) => {
        return (
          <Fragment key={infoMovie.id}>
            <ContentList
              contentList={infoMovie}
              handleClick={handleClick}
              handleClickRating={handleClickRating}
              handleRemove={handleRemove}
              handleClickAddFavorite={handleClickAddFavorite}
              handleClickRemoveFavorite={handleClickRemoveFavorite}
              infoUser={infoUser}
              arrCreatedList={arrCreatedList}
              handleClickAddToList={handleClickAddToList}
              media_type="movie"
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default memo(Movies);
