import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useStyle from "./style";

const NavRouteLink = () => {
  const { listNavbar, navLink } = useStyle();
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ul className={listNavbar}>
        <li>
          <NavLink to={`/${infoUser.username}`} className={navLink}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${infoUser.username}/list`} className={navLink}>
            List
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${infoUser.username}/favorites`} className={navLink}>
            Favorites
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${infoUser.username}/ratings`} className={navLink}>
            Ratings
          </NavLink>
        </li>

        <li>
          <NavLink to={`/${infoUser.username}/watchlist`} className={navLink}>
            WatchList
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavRouteLink;
