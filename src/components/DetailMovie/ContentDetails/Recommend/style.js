import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 20,
      borderTop: "1px solid  #5a4c4c",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: 25,
      paddingLeft: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 400,
      marginBottom: 35,
      boxShadow: "none",
      position: "relative",
      marginLeft: 10,
      marginRight: 10,

      [theme.breakpoints.down("md")]: {
        height: 400,
      },
      [theme.breakpoints.down("sm")]: {
        height: 320,
      },
    },

    contentCard: {
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer",
        "& $poster": {
          transition: "all 0.9s",
          transform: "scale(1.2)",
        },
        "& $poster:before": {
          display: "block",
        },
        "& $iconArrow": {
          opacity: 1,
        },
      },
    },
    poster: {
      height: 350,
      borderRadius: 10,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transition: "all 0.5s",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "none",
        backgroundColor: "rgba(0,0,0,0.7)",
      },

      [theme.breakpoints.down("lg")]: {
        height: 280,
      },
      [theme.breakpoints.down("md")]: {
        height: 340,
      },
      [theme.breakpoints.down("sm")]: {
        height: 260,
      },
    },
    titleMovie: {
      color: "#fff",
      transition: "all 0.5s",
      "&:hover": {
        cursor: "pointer",
        color: "#f9ab00",
      },
      "& >span": {
        color: "#f9ab00",
        marginLeft: 10,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },

    rated: {
      color: "#fff",
      border: "2px solid #f9ab00",
      width: 30,
      height: 30,
      borderRadius: "50%",
      lineHeight: "30px",
      fontSize: "13px",
      textAlign: "center",
      position: "absolute",
      fontWeight: "bold",
      top: "5%",
      left: "8%",
    },

    iconArrow: {
      border: "3px solid #fff",
      top: "40%",
      left: "45%",
      width: 40,
      height: 40,
      fontSize: "40px",
      opacity: 0,
      transition: "all 0.5s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.3)",
        border: "2px solid #f9ab00",
        background: "#fff",
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
