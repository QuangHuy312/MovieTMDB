import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Home from "./views/Home/Home";
import MovieUpComing from "../src/views/MovieUpComing/MovieUpComing";
import MovieTopRated from "../src/views/MovieTopRated/MovieTopRated";
import MovieNowPlaying from "./views/MovieNowPlaying/MovieNowPlaying";
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Login from "./views/Login/Login";

const App = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=d6c392186e19bae2e1addaadb1677274",
        method: "POST",
        body: {
          username: "quanghuyfly1997",
          password: "Huy03120252",
          request_token: "784491c78fcd445fe4aea3d8a8980a036e4acdc4",
        },
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
