import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";
import Movies from "../../components/Movies/Movies";
import MovieTop from "../../components/MovieTop/MovieTop";
import TVShow from "../../components/TVShow/TVShow";
import {
  getMovieNowPlayingAction,
  getMoviePolularAction,
  getMovieTopRatedAction,
  getMovieUpComingAction,
  getTVShowAction,
} from "../../redux/action/MovieManagerAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviePolularAction(1));
    dispatch(getMovieTopRatedAction(1));
    dispatch(getMovieNowPlayingAction(1));
    dispatch(getMovieUpComingAction(1));
    dispatch(getTVShowAction(1));
  }, [dispatch]);

  const {
    arrMoviePopular,
    arrMovieTopRated,
    arrMovieNowPlaying,
    arrMovieUpComing,
    arrTVShow,
  } = useSelector((state) => state.MovieManagerReducer);

  return (
    <Fragment>
      <Carousel arrMoviePopular={arrMoviePopular} />
      <Movies
        arrMovieTopRated={arrMovieTopRated}
        arrMovieNowPlaying={arrMovieNowPlaying}
        arrMovieUpComing={arrMovieUpComing}
      />
      <TVShow arrTVShow={arrTVShow} />
      <MovieTop arrMoviePopular={arrMoviePopular[5]} />
    </Fragment>
  );
};

export default Home;
