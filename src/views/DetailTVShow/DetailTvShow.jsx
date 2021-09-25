import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailBannerTvShowAction,
  getDetailCreditTvShowAction,
  getDetailPhotoTvShowAction,
  getDetailRecommendTvShowAction,
  getDetailReviewsTvShowAction,
  getDetailSimilarTvShowAction,
} from "../../redux/action/TvShowDetailManagerAction";
import BannerMovie from "../../components/DetailMovie/Banner/Banner";
import ContentDetails from "../../components/DetailMovie/ContentDetails/ContentDetails";

const DetailTvShow = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailBannerTvShowAction(id));
    dispatch(getDetailPhotoTvShowAction(id));
    dispatch(getDetailCreditTvShowAction(id));
    dispatch(getDetailSimilarTvShowAction(id));
    dispatch(getDetailReviewsTvShowAction(id));
    dispatch(getDetailRecommendTvShowAction(id));
  }, [id, dispatch]);

  const {
    detailBannerTVShow,
    detailPhotosTVShow,
    detailCreditTVShow,
    detailSimilarTVShow,
    detailReviewsTVShow,
    detailRecommendTVShow,
  } = useSelector((state) => state.TVShowDetailManagerReducer);
  return (
    <Fragment>
      <BannerMovie detailBanner={detailBannerTVShow} id={id} media_type="tv" />
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
