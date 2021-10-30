import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    titleText: {
      textAlign: "center",
      paddingBottom: 20,
      fontWeight: "bold",
      [theme.breakpoints.down("lg")]: {
        fontSize: 25,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 25,
        textAlign: "left",
        paddingBottom: 0,
        paddingTop: 30,
        borderTop: "1px solid #5a4c4c",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
        paddingLeft: 10,
      },
    },
    content: {
      paddingTop: 30,
    },
    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 330,
      boxShadow: "none",
      position: "relative",

      "& .MuiCardContent-root:last-child": {
        padding: 0,
        paddingTop: 10,
      },

      [theme.breakpoints.down("md")]: {
        height: 400,
      },
      [theme.breakpoints.down("xs")]: {
        height: 320,
      },
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
      minHeight: 260,
      maxHeight: 330,

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
        minHeight: 230,
        maxHeight: 280,
      },
      [theme.breakpoints.down("md")]: {
        minHeight: 320,
        maxHeight: 370,
      },
      [theme.breakpoints.down("xs")]: {
        minHeight: 250,
        maxHeight: 270,
      },
    },
    title: {
      border: "none",
      color: "white",
      transition: "all 0.5s",
      padding: 0,
      paddingTop: 10,
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
