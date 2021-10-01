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
import DetailMovie from "./views/DetailMovie/DetailMovie";
import DetailTvShow from "./views/DetailTVShow/DetailTvShow";
import Home from "./views/Home/Home";
import ListItems from "./views/ListDashBoard/ListItems/ListItems";
import ListDashBoard from "./views/ListDashBoard/ListDashBoard";
import Login from "./views/Login/Login";
import MovieList from "./views/MovieList/MovieList";
import NotFound from "./views/NotFound/NotFound";
import DashBoard from "./views/DashBoard/DashBoard";
import Rating from "./views/Rating/Rating";
import TVList from "./views/TVList/TVList.jsx";
import CreateList from "./views/ListDashBoard/CreateList/CreateList";
import AddItems from "./views/ListDashBoard/CreateList/AddItems/AddItems";
import Favourites from "./views/Favourites/Favourites";
import WatchList from "./views/WatchList/WatchList";
import ChooseImage from "./views/ListDashBoard/CreateList/ChooseImage/ChooseImage";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./utils/settings/config";

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
      // const { data } = await axios({
      //   url: `https://api.themoviedb.org/3/list/7108056?api_key=d6c392186e19bae2e1addaadb1677274&session_id=68eb9fbc047cdfa30d69c70d5a9bfbe17bfd8425        `,
      //   method: "DELETE",
      // });
      // console.log(data);
      // const newArr = data.results.filter(
      //   (item) => item.media_type !== "person"
      // );
      // console.log(newArr);
      // console.log(data);
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
            path={`/${infoUser.username}`}
            exact
            component={DashBoard}
          />

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
            path={`/${infoUser.username}/list`}
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
