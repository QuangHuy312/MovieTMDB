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
        url: "https://api.themoviedb.org/3/account/10908886/rated/movies?api_key=d6c392186e19bae2e1addaadb1677274&language=en-US&session_id=dd0f26e07f2a4ae57eaac74162e45ac882992b4e&sort_by=created_at.asc&page=1",
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // data: JSON.stringify({
        //   request_token: "aa5b3b2df4ce178e8a269dddedb43bb684540170",
        // }),
      });
      console.log(data);
    } catch (error) {
      // console.log(error.response);
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
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
