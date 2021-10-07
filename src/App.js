import { MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  fetchGuestSession,
  fetchSInfoUser,
} from "./redux/action/UserManagerAction";
import Admintemplate from "./template/AdminTemplate/Admintemplate";
import { HomeTemplate } from "./template/HomeTemplate/HomeTemplate";
import { theme } from "./utils/settings/config";
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Favourites from "./views/Favourites/Favourites";
import Home from "./views/Home/Home";
import AddItems from "./views/ListDashBoard/CreateList/AddItems/AddItems";
import ChooseImage from "./views/ListDashBoard/CreateList/ChooseImage/ChooseImage";
import CreateList from "./views/ListDashBoard/CreateList/CreateList";
import ListDashBoard from "./views/ListDashBoard/ListDashBoard";
import ListItems from "./views/ListDashBoard/ListItems/ListItems";
import Login from "./views/Login/Login";
import MovieList from "./views/MovieList/MovieList";
import NotFound from "./views/NotFound/NotFound";
import Rating from "./views/Rating/Rating";
import TVList from "./views/TVList/TVList.jsx";
import WatchList from "./views/WatchList/WatchList";

const App = () => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      dispatch(fetchSInfoUser(sessionId));
      dispatch(fetchGuestSession);
    }
  }, [dispatch, sessionId]);
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "https://api.themoviedb.org/3/discover/movie?api_key=d6c392186e19bae2e1addaadb1677274&language=en-US&page=1&release_date.lte=2021-10-09&with_genres=28",
        method: "GET",
      });

      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  fetchData();

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <HomeTemplate path="/" exact component={Home} />
          <HomeTemplate
            path="/detailmovies/:id"
            exact
            component={DetailMovie}
          />
          <HomeTemplate
            path="/detailTVshow/:id"
            exact
            component={DetailTvShow}
          />
          <HomeTemplate path="/movies/list" exact component={MovieList} />

          <HomeTemplate path="/tvshow/list" exact component={TVList} />
          <Route path="/login" exact component={Login} />

          <Admintemplate
            path={`/${infoUser.username}/ratings`}
            exact
            component={Rating}
          />
          <Admintemplate
            path={`/${infoUser.username}/favorites`}
            exact
            component={Favourites}
          />
          <Admintemplate
            path={`/${infoUser.username}/watchlist`}
            exact
            component={WatchList}
          />

          <Admintemplate
            path={`/${infoUser.username}`}
            exact
            component={ListDashBoard}
          />
          <Admintemplate
            path={`/${infoUser.username}/list/new`}
            exact
            component={CreateList}
          />

          <Admintemplate
            path={`/${infoUser.username}/list/:id`}
            exact
            component={ListItems}
          />
          <Admintemplate
            path={`/${infoUser.username}/list/:id/chooseimg`}
            exact
            component={ChooseImage}
          />

          <Admintemplate
            path={`/${infoUser.username}/list/:id/edit`}
            exact
            component={AddItems}
          />
          <HomeTemplate path="/" component={NotFound} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};
export default App;
