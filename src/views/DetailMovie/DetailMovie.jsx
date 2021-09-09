import React, { Fragment, useEffect } from "react";
import BannerMovie from "../../components/DetailMovie/Banner/Banner";
import ContentDetails from "../../components/DetailMovie/ContentDetails/ContentDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailBannerMovieAction,
  getDetailCreditMovieAction,
  getDetailPhotoMovieAction,
  getDetailReviewsMovieAction,
  getDetailSimilarMovieAction,
} from "../../redux/action/MovieDetailManagerAction";

const DetailMovie = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailBannerMovieAction(id));
    dispatch(getDetailPhotoMovieAction(id));
    dispatch(getDetailCreditMovieAction(id));
    dispatch(getDetailSimilarMovieAction(id));
    dispatch(getDetailReviewsMovieAction(id));
  }, [id, dispatch]);
  const {
    detailPhotosMovie,
    detailCreditMovie,
    detailSimilarMovie,
    detailReviewsMovie,
    detailBannerMovie,
  } = useSelector((state) => state.MovieDetailManagerReducer);

  return (
    <Fragment>
      <BannerMovie detailBanner={detailBannerMovie} id={id} />
      <ContentDetails
        detailPhotos={detailPhotosMovie}
        detailCredit={detailCreditMovie}
        detailSimilar={detailSimilarMovie}
        detailReviews={detailReviewsMovie}
      />
    </Fragment>
  );
};

export default DetailMovie;
