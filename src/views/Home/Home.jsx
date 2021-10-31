import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/HomeComponent/Carousel/Carousel";
import Movies from "../../components/HomeComponent/Movies/Movies";
import MovieTop from "../../components/HomeComponent/MovieTop/MovieTop";
import TVShow from "../../components/HomeComponent/TVShow/TVShow";
import {
  getMovieNowPlayingAction,
  getMoviePolularAction,
  getMovieTopRatedAction,
  getMovieUpComingAction,
  getTVShowTopRateAction,
} from "../../redux/action/MovieManagerAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviePolularAction(1));
    dispatch(getMovieTopRatedAction(1));
    dispatch(getMovieNowPlayingAction(1));
    dispatch(getMovieUpComingAction(1));
    dispatch(getTVShowTopRateAction(1));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const {
    arrMoviePopular,
    arrMovieTopRated,
    arrMovieNowPlaying,
    arrMovieUpComing,
    arrTVShowTopRated,
  } = useSelector((state) => state.MovieManagerReducer);

  return (
    <Fragment>
      <Carousel arrMoviePopular={arrMoviePopular} />
      <Movies
        arrMovieTopRated={arrMovieTopRated}
        arrMovieNowPlaying={arrMovieNowPlaying}
        arrMovieUpComing={arrMovieUpComing}
      />
      <TVShow arrTVShowTopRated={arrTVShowTopRated} />
      <MovieTop arrMoviePopular={arrMoviePopular[1]} />
    </Fragment>
  );
};

export default Home;
