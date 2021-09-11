import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchSInfoUser } from "./redux/action/UserManagerAction";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MovieList from "./views/MovieList/MovieList";
import NotFound from "./views/NotFound/NotFound";
import TVList from "./views/TVList/TVList.jsx";

const App = () => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      dispatch(fetchSInfoUser(sessionId));
    }
  }, [dispatch, sessionId]);
  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "https://api.themoviedb.org/3/discover/movie?api_key=d6c392186e19bae2e1addaadb1677274&page=1",
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
        <HomeTemplate path="/movies/list" exact component={MovieList} />
        <HomeTemplate
          path="/movies/list/page/:number"
          exact
          component={MovieList}
        />
        <HomeTemplate path="/tvshow/list" exact component={TVList} />
        <Route path="/login" exact component={Login} />
        <HomeTemplate path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
