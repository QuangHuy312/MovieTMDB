import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 20,
    },
    info: {
      color: "#19bae5",
      textAlign: "center",
      "& h6": {
        fontWeight: "bold",
      },
      "& >i": {
        fontSize: 30,
        [theme.breakpoints.down("md")]: {
          fontSize: 25,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 20,
        },
      },
      "& >h6": {
        fontSize: 25,
        [theme.breakpoints.down("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 15,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 10,
        },
      },
    },

    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 330,
      boxShadow: "none",
      position: "relative",
    },

    viewAllIcon: {
      textAlign: "right",
      padding: 20,
      borderRadius: 10,
    },
    contentCard: {
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer",
        "& $media": {
          transition: "all 0.9s",
          transform: "scale(1.2)",
        },
        "& $media:before": {
          display: "block",
        },
        "& $iconArrow": {
          opacity: 1,
        },
      },
    },
    media: {
      height: 270,
      borderRadius: 7,
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
    },
    title: {
      border: "none",
      color: "#000",
      transition: "all 0.5s",
      "&:hover": {
        cursor: "pointer",
        color: "#f9ab00",
      },
    },

    rated: {
      color: "white",
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
      top: "35%",
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
        background: "white",
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
