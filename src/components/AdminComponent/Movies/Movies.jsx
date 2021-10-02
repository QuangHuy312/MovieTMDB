import { useSnackbar } from "notistack";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingMovieAction,
  postRatingMovieAction,
} from "../../../redux/action/UserManagerAction";
import { addMovieToListAction } from "../../../redux/action/DashBoardManagerAction";
import ContentList from "../ContentList/ContentList";
import { useLocation } from "react-router";
import { Typography } from "@material-ui/core";

const Movies = ({
  arrListMovie,
  arrCreatedList,
  sessionId,
  infoUser,
  arrListRatedMovie,
  arrListFavoriteMovie,
}) => {
  const dispatch = useDispatch();
  const { guestSessionId } = useSelector((state) => state.UserManagerReducer);
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const pathname = location.pathname;

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
  const handleClickClearRating = (id) => {
    dispatch(
      deleteRatingMovieAction(
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

  const handleClickAddToList = (listId, movieId) => {
    dispatch(
      addMovieToListAction(listId, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };

  arrListMovie?.forEach((movie, index) => {
    const idxFavorites = arrListFavoriteMovie?.findIndex(
      (item) => item.id === movie.id
    );
    const idxRated = arrListRatedMovie?.findIndex(
      (item) => item.id === movie.id
    );
    if (idxFavorites > -1) {
      arrListMovie[index].favorite = true;
    }
    if (idxRated > -1) {
      arrListMovie[index].rating = arrListRatedMovie[idxRated].rating;
    }
  });

  return (
    <Fragment>
      {arrListMovie.length > 0 ? (
        <Fragment>
          {arrListMovie.map((infoMovie) => {
            return (
              <Fragment key={infoMovie.id}>
                <ContentList
                  contentList={infoMovie}
                  handleClickRating={handleClickRating}
                  handleClickClearRating={handleClickClearRating}
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
      ) : (
        <Typography variant="body1">You haven't added any movies</Typography>
      )}
    </Fragment>
  );
};

export default memo(Movies);
