import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchSInfoUser } from "./redux/action/UserManagerAction";
import Admintemplate from "./template/AdminTemplate/Admintemplate";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MovieList from "./views/MovieList/MovieList";
import NotFound from "./views/NotFound/NotFound";
import Profile from "./views/Profile/Profile";
import Rating from "./views/Rating/Rating";
import TVList from "./views/TVList/TVList.jsx";

const App = () => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      dispatch(fetchSInfoUser(sessionId));
    }
  }, [dispatch, sessionId]);
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "https://api.themoviedb.org/3/account/10908886/rated/movies?api_key=d6c392186e19bae2e1addaadb1677274&language=en-US&session_id=b6d189809bdbb2e3273a3a8008b56470616788ac&sort_by=created_at.asc&page=1,1000",
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // data: JSON.stringify({
        //   value: 8,
        // }),
      });
      // console.log(data);
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
        <HomeTemplate path="/tvshow/list" exact component={TVList} />
        <Route path="/login" exact component={Login} />
        <Admintemplate
          path={`/${infoUser.username}`}
          exact
          component={Profile}
        />

        <Admintemplate
          path={`/${infoUser.username}/ratings`}
          exact
          component={Rating}
        />
        <HomeTemplate path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
