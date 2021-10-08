import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import Loading from "./components/Loading/Loading";
import {
  fetchGuestSession,
  fetchSInfoUser,
} from "./redux/action/UserManagerAction";
import { theme } from "./utils/settings/config";
import Favourites from "./views/Admin/Favourites/Favourites";
import Rating from "./views/Admin/Rating/Rating";
import WatchList from "./views/Admin/WatchList/WatchList";
import AddItems from "./views/ListDashBoard/CreateList/AddItems/AddItems";
import ChooseImage from "./views/ListDashBoard/CreateList/ChooseImage/ChooseImage";
import CreateList from "./views/ListDashBoard/CreateList/CreateList";
import ListItems from "./views/ListDashBoard/ListItems/ListItems";

const HomeTemplate = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./template/HomeTemplate/HomeTemplate")),
      1000
    );
  });
});

const Admintemplate = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./template/AdminTemplate/Admintemplate")),
      1000
    );
  });
});

const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./views/Login/Login")), 400);
  });
});
const ListDashBoard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./views/ListDashBoard/ListDashBoard")),
      400
    );
  });
});
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./views/Home/Home")), 400);
  });
});
const MovieList = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./views/Home/MovieList/MovieList")), 800);
  });
});

const TVList = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./views/Home/TVList/TVList")), 800);
  });
});

const DetailMovie = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./views/HomeDetail/DetailMovie/DetailMovie")),
      400
    );
  });
});

const DetailTvShow = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./views/HomeDetail/DetailTVShow/DetailTvShow")),
      400
    );
  });
});

const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./views/NotFound/NotFound")), 500);
  });
});
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

  return (
    <BrowserRouter>
      <Loading />
      <Suspense fallback={<LazyLoading />}>
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
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
