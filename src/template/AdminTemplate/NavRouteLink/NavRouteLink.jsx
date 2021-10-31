import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useStyle from "./style";

const NavRouteLink = () => {
  const { navLink, isActive } = useStyle();
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{ paddingTop: 20 }}
      >
        <Grid item xs={3} md={2}>
          <NavLink
            to={`/${infoUser.username}`}
            exact={true}
            activeClassName={isActive}
            className={navLink}
          >
            My List
          </NavLink>
        </Grid>
        <Grid item xs={3} md={2}>
          <NavLink
            to={`/${infoUser.username}/favorites`}
            activeClassName={isActive}
            className={navLink}
          >
            Favorites
          </NavLink>
        </Grid>
        <Grid item xs={3} md={2}>
          <NavLink
            to={`/${infoUser.username}/ratings`}
            activeClassName={isActive}
            className={navLink}
          >
            Ratings
          </NavLink>
        </Grid>
        <Grid item xs={3} md={2}>
          <NavLink
            to={`/${infoUser.username}/watchlist`}
            activeClassName={isActive}
            className={navLink}
          >
            WatchList
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavRouteLink;
