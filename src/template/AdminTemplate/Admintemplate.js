import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import {
  getRatedMovies,
  getRatedTVShow,
} from "../../redux/action/DashBoardManagerAction";
import Footer from "../HomeTemplate/Footer/Footer";
import Banner from "./Banner/Banner";
import Header from "./Header/Header.jsx";

const Admintemplate = (props) => {
  const { component: RouteComponent, ...restProps } = props;
  const sessionId = localStorage.getItem("sessionId");
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const { arrTotalRatedTVShow, arrTotalRatedMovies } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const id = infoUser.id;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRatedMovies(id, sessionId, 1));
    dispatch(getRatedTVShow(id, sessionId, 1));
  }, [dispatch, id, sessionId]);
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
                arrTotalRatedTVShow={arrTotalRatedTVShow}
                arrTotalRatedMovies={arrTotalRatedMovies}
              />
              <RouteComponent {...routeProps} />
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
