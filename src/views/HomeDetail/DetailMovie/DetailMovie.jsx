import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../../components/DetailMovie/Banner/Banner";
import ContentDetails from "../../../components/DetailMovie/ContentDetails/ContentDetails";
import {
  getFavoriteMovieListAction,
  getRatedMovieListAction,
  getWatchListMovieAction,
} from "../../../redux/action/DashBoardManagerAction";
import {
  getDetailBannerMovieAction,
  getDetailCreditMovieAction,
  getDetailPhotoMovieAction,
  getDetailRecommendMovieAction,
  getDetailReviewsMovieAction,
  getDetailSimilarMovieAction,
} from "../../../redux/action/MovieDetailManagerAction";

const DetailMovie = ({ match, infoUser, sessionId }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailBannerMovieAction(id));
    dispatch(getDetailPhotoMovieAction(id));
    dispatch(getDetailCreditMovieAction(id));
    dispatch(getDetailSimilarMovieAction(id));
    dispatch(getDetailReviewsMovieAction(id));
    dispatch(getDetailRecommendMovieAction(id));

    dispatch(getRatedMovieListAction(infoUser?.id, sessionId, 1));
    dispatch(getFavoriteMovieListAction(infoUser?.id, sessionId, 1));
    dispatch(getWatchListMovieAction(infoUser?.id, sessionId, 1));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  const {
    detailPhotosMovie,
    detailCreditMovie,
    detailSimilarMovie,
    detailReviewsMovie,
    detailBannerMovie,
    detailRecommendMovie,
  } = useSelector((state) => state.MovieDetailManagerReducer);

  const { arrListRatedMovie, arrListFavoriteMovie, arrWatchListMovie } =
    useSelector((state) => state.DashBoardManagerReducer);

  const idxFavorites = arrListFavoriteMovie?.findIndex(
    (item) => item?.id === detailBannerMovie.id
  );
  const idxRated = arrListRatedMovie?.findIndex(
    (item) => item?.id === detailBannerMovie.id
  );

  const idxWatchList = arrWatchListMovie?.findIndex(
    (item) => item?.id === detailBannerMovie.id
  );
  if (idxFavorites > -1) {
    detailBannerMovie.favorite = true;
  } else {
    detailBannerMovie.favorite = false;
  }
  if (idxRated > -1) {
    detailBannerMovie.rating = arrListRatedMovie[idxRated].rating;
  }

  if (idxWatchList > -1) {
    detailBannerMovie.watchlist = true;
  } else {
    detailBannerMovie.watchlist = false;
  }

  return (
    <Fragment>
      <Banner
        detailBanner={detailBannerMovie}
        detailCredit={detailCreditMovie}
        movieId={id}
        media_type="movie"
      />
      <ContentDetails
        detailPhotos={detailPhotosMovie}
        detailCredit={detailCreditMovie}
        detailSimilar={detailSimilarMovie}
        detailReviews={detailReviewsMovie}
        detailRecommend={detailRecommendMovie}
      />
    </Fragment>
  );
};

export default DetailMovie;
