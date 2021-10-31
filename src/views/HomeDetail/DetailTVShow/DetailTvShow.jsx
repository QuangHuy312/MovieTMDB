import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../../components/DetailMovie/Banner/Banner";
import ContentDetails from "../../../components/DetailMovie/ContentDetails/ContentDetails";
import {
  getFavoriteTVListAction,
  getRatedTVShowListAction,
  getWatchListTVAction,
} from "../../../redux/action/DashBoardManagerAction";
import {
  getDetailBannerTvShowAction,
  getDetailCreditTvShowAction,
  getDetailPhotoTvShowAction,
  getDetailRecommendTvShowAction,
  getDetailReviewsTvShowAction,
  getDetailSimilarTvShowAction,
} from "../../../redux/action/TvShowDetailManagerAction";

const DetailTvShow = ({ match, infoUser, sessionId }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailBannerTvShowAction(id));
    dispatch(getDetailPhotoTvShowAction(id));
    dispatch(getDetailCreditTvShowAction(id));
    dispatch(getDetailSimilarTvShowAction(id));
    dispatch(getDetailReviewsTvShowAction(id));
    dispatch(getDetailRecommendTvShowAction(id));

    dispatch(getRatedTVShowListAction(infoUser.id, sessionId, 1));
    dispatch(getFavoriteTVListAction(infoUser.id, sessionId, 1));
    dispatch(getWatchListTVAction(infoUser.id, sessionId, 1));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  const {
    detailBannerTVShow,
    detailPhotosTVShow,
    detailCreditTVShow,
    detailSimilarTVShow,
    detailReviewsTVShow,
    detailRecommendTVShow,
  } = useSelector((state) => state.TVShowDetailManagerReducer);

  const { arrListRatedTV, arrListFavoriteTV, arrWatchListTV } = useSelector(
    (state) => state.DashBoardManagerReducer
  );

  const idxFavorites = arrListFavoriteTV?.findIndex(
    (item) => item?.id === detailBannerTVShow.id
  );
  const idxRated = arrListRatedTV?.findIndex(
    (item) => item?.id === detailBannerTVShow.id
  );

  const idxWatchList = arrWatchListTV?.findIndex(
    (item) => item?.id === detailBannerTVShow.id
  );
  if (idxFavorites > -1) {
    detailBannerTVShow.favorite = true;
  } else {
    detailBannerTVShow.favorite = false;
  }
  if (idxRated > -1) {
    detailBannerTVShow.rating = arrListRatedTV[idxRated].rating;
  }

  if (idxWatchList > -1) {
    detailBannerTVShow.watchlist = true;
  } else {
    detailBannerTVShow.watchlist = false;
  }

  return (
    <Fragment>
      <Banner
        detailBanner={detailBannerTVShow}
        movieId={id}
        media_type="tv"
        detailCredit={detailCreditTVShow}
      />
      <ContentDetails
        detailPhotos={detailPhotosTVShow}
        detailCredit={detailCreditTVShow}
        detailSimilar={detailSimilarTVShow}
        detailReviews={detailReviewsTVShow}
        detailRecommend={detailRecommendTVShow}
      />
    </Fragment>
  );
};

export default DetailTvShow;
