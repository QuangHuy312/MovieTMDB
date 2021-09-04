import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import Home from "./views/Home/Home";
import MovieUpComing from "../src/views/MovieUpComing/MovieUpComing";
import MovieTopRated from "../src/views/MovieTopRated/MovieTopRated";
import MovieNowPlaying from "./views/MovieNowPlaying/MovieNowPlaying";

const App = () => {
  // const fetchData = async () => {
  //   try {
  //     const res = await axios({
  //       url: "https://api.themoviedb.org/3/movie/550988?api_key=d6c392186e19bae2e1addaadb1677274&append_to_response=videos ",
  //       method: "GET",
  //     });
  //     console.log(res);
  //   } catch (error) {}
  // };
  // fetchData();

  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/movies/upcoming" exact component={MovieUpComing} />
        <HomeTemplate path="/movies/toprated" exact component={MovieTopRated} />
        <HomeTemplate
          path="/movies/nowplaying"
          exact
          component={MovieNowPlaying}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
