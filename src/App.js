import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Home from "./views/Home/Home";
import MovieUpComing from "../src/views/MovieUpComing/MovieUpComing";
import MovieTopRated from "../src/views/MovieTopRated/MovieTopRated";
import MovieNowPlaying from "./views/MovieNowPlaying/MovieNowPlaying";
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Login from "./views/Login/Login";
import { useDispatch } from "react-redux";
import { fetchSInfoUser } from "./redux/action/UserManagerAction";
import NotFound from "./views/NotFound/NotFound";

const App = () => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      dispatch(fetchSInfoUser(sessionId));
    }
  }, []);
  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "   https://api.themoviedb.org/3/movie/278/recommendations?api_key=d6c392186e19bae2e1addaadb1677274&language=en-US&page=1",
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // data: JSON.stringify({
        //   value: 8,
        // }),
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchData();

  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/detailmovies/:id" exact component={DetailMovie} />
        <HomeTemplate path="/detailTVshow/:id" exact component={DetailTvShow} />
        <HomeTemplate path="/movies/upcoming" exact component={MovieUpComing} />
        <HomeTemplate path="/movies/toprated" exact component={MovieTopRated} />
        <HomeTemplate
          path="/movies/nowplaying"
          exact
          component={MovieNowPlaying}
        />
        <HomeTemplate path="/" component={NotFound} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
