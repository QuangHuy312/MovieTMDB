import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import Movies from "../../components/Movies/Movies";
import {
  getMovieNowPlayingAction,
  getMoviePolularAction,
  getMovieTopRatedAction,
  getMovieUpComingAction,
} from "../../redux/action/MovieManagerAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviePolularAction(1));
    dispatch(getMovieTopRatedAction(1));
    dispatch(getMovieNowPlayingAction(1));
    dispatch(getMovieUpComingAction(1));
  }, [dispatch]);

  const {
    arrMoviePopular,
    arrMovieTopRated,
    arrMovieNowPlaying,
    arrMovieUpComing,
  } = useSelector((state) => state.MovieManagerReducer);
  return (
    <Fragment>
      <Carousel arrMoviePopular={arrMoviePopular} />
      <Movies
        arrMovieTopRated={arrMovieTopRated}
        arrMovieNowPlaying={arrMovieNowPlaying}
        arrMovieUpComing={arrMovieUpComing}
      />
    </Fragment>
  );
};

export default Home;
