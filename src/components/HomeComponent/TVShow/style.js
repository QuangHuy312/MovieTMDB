import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      position: "relative",
    },
    title: {
      fontSize: 30,
    },
    card: {
      backgroundColor: "transparent",
    },
    contentMedia: {
      marginLeft: "20px",
      height: 350,
      borderRadius: 10,
      position: "relative",
      "&:hover": {
        "& $hoverContent": {
          transform: "scale(1)",
          transition: "0.6s ease",
        },
      },

      [theme.breakpoints.down("xl")]: {
        height: 400,
      },
      [theme.breakpoints.down("md")]: {
        height: 350,
      },

      [theme.breakpoints.down("sm")]: {
        height: 300,
      },
      [theme.breakpoints.down("xs")]: {
        height: 230,
      },
    },
    hoverContent: {
      position: "absolute",
      top: -1,
      left: 0,
      bottom: -1,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      borderRadius: 10,
      zIndex: 1,
      transform: "scale(0)",
    },

    hoverButton: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "#fff",
      border: "1px solid #f9ab00",
      borderRadius: 15,
      padding: 15,
      fontSize: 14,
      transition: "all 0.5s",
      "&:hover": {
        backgroundColor: "#7f5e16",
      },
      [theme.breakpoints.down("md")]: {
        padding: 10,
        borderRadius: 10,
      },
      [theme.breakpoints.down("sm")]: {
        padding: 5,
        borderRadius: 5,
        fontSize: 10,
      },
    },
    arrowContentNext: {
      width: 20,
      position: "absolute",
      top: "-7%",
      right: "14%",
      cursor: "pointer",

      [theme.breakpoints.down("lg")]: {
        right: "19%",
      },
      [theme.breakpoints.down("md")]: {
        right: "25%",
      },
      [theme.breakpoints.down("sm")]: {
        right: "33%",
      },
      [theme.breakpoints.down("xs")]: {
        right: "43%",
      },
    },

    arrowContentPrev: {
      left: "80%",
      right: 0,

      [theme.breakpoints.down("lg")]: {
        left: "73%",
      },
      [theme.breakpoints.down("md")]: {
        left: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        left: "53%",
      },
      [theme.breakpoints.down("xs")]: {
        left: "40%",
      },
    },
    arrowImage: {
      color: "white",
      fontSize: 30,
      transition: "all 0.5s",
      padding: 5,
      background: "#222028",
      "&:hover": {
        backgroundColor: "#5a4c4c",
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
