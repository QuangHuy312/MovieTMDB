import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingTop: 10,
  },
  content: {
    background: "#1a191f",
    padding: 10,
    borderBottom: "1px solid #5a4c4c",
    width: "100%",
    zIndex: 99,
    transition: "background 500ms linear",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0 20px 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px 0",
    },
  },

  scrollNav: {
    backgroundColor: "transparent",
  },
  isActive: {
    color: "#f9ab00 !important",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    height: 50,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      height: 30,
    },
  },
  logo: {
    width: 170,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
      height: "auto",
    },
  },

  listNavbar: {
    color: "white",
    marginTop: 10,
    display: (props) => (props.isDeskTop || props.openDrawer ? "none" : "flex"),
    "& .MuiListItem-root": {
      paddingTop: 0,
    },
  },
  navLink: {
    marginLeft: 15,
    marginRight: 15,
    border: "transparent",
    transition: "all 0.5s",
    color: "white",
    position: "relative",
    "&:hover": {
      color: "#f9ab00",
      "&::after": {
        width: "100%",
        transition: "all 0.5s linear",
      },
    },
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: -5,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      borderBottom: "3px solid #f9ab00",
    },
  },
  contentUser: {
    display: (props) => (props.isDeskTop || props.openDrawer ? "none" : "flex"),
  },
  avatarUser: {
    display: "inline-block",
    cursor: "pointer",
    fontSize: 30,
    marginRight: 10,
    color: "#e9dada",
    marginTop: 5,
  },
  userName: {
    color: "#f9ab00",
    paddingLeft: 10,
    cursor: "pointer",
    alignSelf: "center",
  },

  menuIcon: {
    display: (props) =>
      props.isDeskTop || props.openDrawer ? "block" : "none",
    "& >button": {
      padding: 0,
      margin: 0,
    },
  },
  contentDrawer: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.3)",
    "& .MuiDrawer-paper": {
      padding: "30px 0 0 30px",
      backgroundColor: "#032541",
      width: 350,
      [theme.breakpoints.down("sm")]: {
        width: 270,
      },
      [theme.breakpoints.down("xs")]: {
        width: 220,
      },
    },
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemMenu: {
    color: "#fff",
    padding: "10px 0",
    fontSize: 23,
    position: "relative",
    "&:hover": {
      color: "#f9ab00",
      "&::after": {
        width: "100%",
        transition: "all 0.5s linear",
      },
    },

    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      borderBottom: "3px solid #f9ab00",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  login: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
  },
}));

export default useStyle;
