import { useSnackbar } from "notistack";
import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouriteAction,
  deleteRatingMovieAction,
  postRatingMovieAction,
} from "../../../../redux/action/UserManagerAction";
import { addMovieToListAction } from "../../../../redux/action/DashBoardManagerAction";
import ContentList from "../../ContentList/ContentList";

const Movies = ({ arrListRatedMovie, arrCreatedList }) => {
  const dispatch = useDispatch();
  const { guestSessionId, infoUser } = useSelector(
    (state) => state.UserManagerReducer
  );
  const sessionId = localStorage.getItem("sessionId");
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    console.log(123);
  };

  const handleClickRating = (id, valueRating) => {
    if (valueRating) {
      dispatch(
        postRatingMovieAction(
          id,
          sessionId,
          valueRating,
          guestSessionId,

          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser.id
        )
      );
    }
  };

  const handleRemoveRating = (id) => {
    dispatch(
      deleteRatingMovieAction(
        id,
        sessionId,
        guestSessionId,

        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        infoUser.id
      )
    );
  };

  const handleClickAddFavorite = (movieId) => {
    dispatch(
      addToFavouriteAction(
        infoUser.id,
        sessionId,
        movieId,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        true
      )
    );
  };

  const handleClickRemoveFavorite = (movieId) => {
    dispatch(
      addToFavouriteAction(
        infoUser.id,
        sessionId,
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
      {arrListRatedMovie.map((infoMovie) => {
        return (
          <Fragment key={infoMovie.id}>
            <ContentList
              contentList={infoMovie}
              handleClick={handleClick}
              handleClickRating={handleClickRating}
              handleRemoveRating={handleRemoveRating}
              handleClickAddFavorite={handleClickAddFavorite}
              handleClickRemoveFavorite={handleClickRemoveFavorite}
              infoUser={infoUser}
              arrCreatedList={arrCreatedList}
              handleClickAddToList={handleClickAddToList}
            />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default memo(Movies);
