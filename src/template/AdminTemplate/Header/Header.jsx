import { Avatar, Container, Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LOGO from "../../../assets/hdvietsub-logo.png";
import NO_AVATAR from "../../../assets/img_no_avatar.png";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "../../HomeTemplate/Header/style";

const Header = () => {
  const {
    navContent,
    scrollNav,
    content,
    logoHeader,
    navLink,
    listNavbar,
    avatarUser,
  } = useStyle();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrolled = clsx(navContent, scrollNav);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const history = useHistory();

  useEffect(() => {
    const handleScroll = (e) => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("sessionId");
    history.push("/");
  };

  return (
    <header className={isScrolled ? navContent : scrolled}>
      <Container className={content}>
        <div style={{ display: "flex" }}>
          <NavLink to="/" className={logoHeader}>
            <img src={LOGO} alt="logo" />
          </NavLink>
        </div>
        <div style={{ display: "flex" }}>
          <ul className={listNavbar}>
            <li>
              <NavLink to={`/${infoUser.username}`} className={navLink}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${infoUser.username}/favorites`}
                className={navLink}
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${infoUser.username}/list`} className={navLink}>
                List
              </NavLink>
            </li>

            <li>
              <NavLink to={`/${infoUser.username}/ratings`} className={navLink}>
                Ratings
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/${infoUser.username}/watchlist`}
                className={navLink}
              >
                WatchList
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Avatar
              alt="Remy Sharp"
              src={
                !!infoUser.avatar?.tmdb
                  ? `${IMAGE_URL}${WIDTH_IMAGE}${infoUser?.avatar?.tmdb?.avatar_path}`
                  : NO_AVATAR
              }
              onClick={handleClick}
              className={avatarUser}
            />
          </div>
          <Typography
            variant="body2"
            style={{ alignSelf: "center", color: "white" }}
          >
            Hello
            <Typography
              variant="body"
              style={{
                color: "#f9ab00",
                paddingLeft: 10,
                cursor: "pointer",
              }}
              onClick={() => history.push(`/${infoUser.username}`)}
            >
              {infoUser.name || infoUser.username}
            </Typography>
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            style={{ top: 50 }}
            onClick={handleClose}
          >
            <MenuItem onClick={() => history.push(`/${infoUser.username}`)}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Container>
    </header>
  );
};

export default Header;