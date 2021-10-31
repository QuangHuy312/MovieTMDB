import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import useStyle from "./style";

const Loading = () => {
  const { dotsLoading, content } = useStyle();
  const history = useHistory();
  const { isLazy } = useSelector((state) => state.LazyReducer);
  const {
    userLoading,
    arrMoviePopularLoading,
    arrMovieTopratedLoading,
    arrTVShowTopRatedLoading,

    arrDetailBannerMovieLoading,
    arrDetailReviewsMovieLoading,
    arrDetailSimilarMovieLoading,
    arrDetailRecommendMovieLoading,

    arrDetailBannerTVShowLoading,
    arrDetailPhotosTVShowLoading,
    arrDetailSimilarTVShowLoading,
    arrDetailRecommendTVShowLoading,

    arrDetailListLoading,
    arrCreatedListLoading,

    arrTVShowRatedListLoading,
    arrMovieRatedListLoading,
  } = useSelector((state) => state.LoadingReducer);

  const HomePageLoading =
    userLoading ||
    arrMoviePopularLoading ||
    arrMovieTopratedLoading ||
    arrTVShowTopRatedLoading;

  const DetailMovie =
    arrDetailBannerMovieLoading ||
    arrDetailReviewsMovieLoading ||
    arrDetailSimilarMovieLoading ||
    arrDetailRecommendMovieLoading;
  const DetailTvShow =
    arrDetailBannerTVShowLoading ||
    arrDetailPhotosTVShowLoading ||
    arrDetailSimilarTVShowLoading ||
    arrDetailRecommendTVShowLoading;

  const DashBoardLoading =
    arrDetailListLoading ||
    arrCreatedListLoading ||
    arrTVShowRatedListLoading ||
    arrMovieRatedListLoading;
  const playLoading =
    isLazy ||
    HomePageLoading ||
    DetailMovie ||
    DetailTvShow ||
    DashBoardLoading;
  return (
    <Fragment>
      {playLoading && (
        <div className={content}>
          <div className={dotsLoading}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Loading;
