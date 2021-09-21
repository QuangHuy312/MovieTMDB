import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import {
  getCreatedListAction,
  getFavoriteMovieListAction,
  getRatedMovieListAction,
  getRatedTVShowListAction,
} from "../../redux/action/DashBoardManagerAction";
import Footer from "../HomeTemplate/Footer/Footer";
import Banner from "./Banner/Banner";
import Header from "./Header/Header.jsx";

const Admintemplate = (props) => {
  const { component: RouteComponent, ...restProps } = props;
  const sessionId = localStorage.getItem("sessionId");
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const { arrListRatedTV, arrListRatedMovie } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const id = infoUser.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRatedMovieListAction(id, sessionId, 1));
    dispatch(getRatedTVShowListAction(id, sessionId, 1));
    dispatch(getFavoriteMovieListAction(id, sessionId, 1));
    dispatch(getCreatedListAction(id, sessionId));
  }, [dispatch, id, sessionId]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(routeProps) => {
        if (sessionId) {
          return (
            <Fragment>
              <Header />
              <Banner
                infoUser={infoUser}
                arrListRatedTV={arrListRatedTV}
                arrListRatedMovie={arrListRatedMovie}
              />
              <RouteComponent
                {...routeProps}
                infoUser={infoUser}
                sessionId={sessionId}
              />
              <div style={{ backgroundColor: "#032541", color: "#fff" }}>
                <Footer />
              </div>
            </Fragment>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default Admintemplate;
