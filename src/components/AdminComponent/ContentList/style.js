import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    card: { padding: "0 15px 15px 20px" },
    content: {
      display: "flex",
      marginBottom: 20,
      "& .MuiCardContent-root": {
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: 0,
      },
    },
    poster: {
      borderRadius: 10,
      minWidth: 150,
      minHeight: 200,
      marginBottom: 20,
      backgroundSize: "cover",
      backgroundPosition: "center",

      [theme.breakpoints.down("sm")]: {
        width: 50,
        height: 50,
      },
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      cursor: "pointer",
      "&:hover": {
        color: "#f9ab00",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 17,
      },
    },
    circularRate: {
      width: 60,
      height: 60,
      padding: "7px 10px 0",
      [theme.breakpoints.down("sm")]: {
        width: 100,
        height: 100,
      },
    },
    date: {
      color: "#aa8181",
      fontSize: 13,
    },
    rating: {
      textAlign: "center",
      lineHeight: 2.3,
      fontSize: 15,
    },
    overview: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    listIcons: {
      "& .MuiListItem-gutters": {
        padding: 0,
        paddingTop: 10,
      },
      "& .MuiList-padding": {
        paddingBottom: 20,
        paddingTop: 15,
      },
    },
  };
});

export default useStyle;
