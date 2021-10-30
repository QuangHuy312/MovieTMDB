import {
  AppBar,
  Avatar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LOGO from "../../../assets/hdvietsub-logo.png";
import NO_AVATAR from "../../../assets/img_no_avatar.png";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const user = localStorage.getItem("sessionId");
  const { infoUser } = useSelector((state) => state.UserManagerReducer);
  const history = useHistory();
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (isDeskTop) {
      if (openDrawer) {
        setOpenDrawer(false);
      }
    }
  }, [isDeskTop]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setOpenDrawer(false);
    setAnchorEl(null);
    localStorage.removeItem("sessionId");
    history.push("/");
  };
  const {
    root,
    navContent,
    isActive,
    logo,
    scrollNav,
    content,
    navLink,
    listNavbar,
    contentUser,
    avatarUser,
    userName,
    menuIcon,
    drawerHeader,
    contentDrawer,
    itemMenu,
    login,
  } = useStyle({ isDeskTop, openDrawer });
  const scrolled = clsx(content, scrollNav);
  return (
    <div className={root}>
      <AppBar className={isScrolled ? content : scrolled}>
        <Container maxWidth="xl" className={navContent}>
          <NavLink to="/">
            <img src={LOGO} alt="logo" className={logo} />
          </NavLink>

          <List disablePadding className={listNavbar}>
            <ListItem>
              <NavLink
                to="/"
                className={navLink}
                exact={true}
                activeClassName={isActive}
              >
                HOME
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/movies/list"
                className={navLink}
                activeClassName={isActive}
              >
                MOVIE
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/tvshow/list"
                className={navLink}
                activeClassName={isActive}
              >
                TV
              </NavLink>
            </ListItem>
          </List>

          {user ? (
            <div className={contentUser}>
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
                className={userName}
                onClick={() => history.push(`/${infoUser.username}`)}
              >
                {infoUser.name || infoUser.username}
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
                  My List
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              {!isDeskTop && (
                <NavLink to="/login" className={root}>
                  <AccountCircleOutlinedIcon
                    className={avatarUser}
                    size="large"
                  />
                  <Typography variant="body2" className={login}>
                    Login
                  </Typography>
                </NavLink>
              )}
            </>
          )}

          <div className={menuIcon}>
            <IconButton edge="end" onClick={handleDrawerOpen} color="inherit">
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>

          <Drawer
            open={openDrawer}
            onClose={handleDrawerClose}
            anchor="right"
            transitionDuration={400}
            className={contentDrawer}
          >
            <div className={drawerHeader}>
              {user ? (
                <div>
                  <div className={root}>
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
                    <div style={{ alignSelf: "center", color: "#fff" }}>
                      <Typography
                        variant="span"
                        className={userName}
                        onClick={() => history.push(`/${infoUser.username}`)}
                      >
                        {infoUser.name || infoUser.username}
                      </Typography>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={root}>
                  <NavLink to="/login" className={root}>
                    <AccountCircleOutlinedIcon
                      className={avatarUser}
                      size="large"
                    />
                    <Typography variant="body2" className={login}>
                      Login
                    </Typography>
                  </NavLink>
                </div>
              )}
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon style={{ color: "#fff" }} />
              </IconButton>
            </div>
            <div className={root}>
              <List disablePadding>
                <ListItem>
                  <NavLink
                    to="/"
                    className={itemMenu}
                    onClick={handleDrawerClose}
                  >
                    HOME
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    to="/movies/list"
                    className={itemMenu}
                    onClick={handleDrawerClose}
                  >
                    MOVIE LIST
                  </NavLink>
                </ListItem>

                <ListItem>
                  <NavLink
                    to="/tvshow/list"
                    className={itemMenu}
                    onClick={handleDrawerClose}
                  >
                    TV SHOW LIST
                  </NavLink>
                </ListItem>
                {user && (
                  <ListItem>
                    <NavLink
                      to={`/${infoUser.username}`}
                      className={itemMenu}
                      onClick={handleDrawerClose}
                    >
                      My List
                    </NavLink>
                  </ListItem>
                )}
                {user && (
                  <ListItem>
                    <NavLink to="/" className={itemMenu} onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </ListItem>
                )}
              </List>
            </div>
          </Drawer>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
