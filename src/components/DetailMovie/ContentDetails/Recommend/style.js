import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    content: {
      paddingTop: 40,
      borderTop: "1px solid  #5a4c4c",
    },
    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 530,
      marginBottom: 35,
      boxShadow: "none",
      position: "relative",
      marginLeft: 10,
      marginRight: 10,
      "@media screen and (max-width:992px)": {
        height: 440,
      },
      "@media screen and (max-width:768px)": {
        height: 380,
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
    poster: {
      height: 390,
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
      "@media screen and (max-width:1200px)": {
        height: 300,
      },
      "@media screen and (max-width:992px)": {
        height: 400,
      },
      "@media screen and (max-width:768px)": {
        height: 330,
      },
    },
    title: {
      boder: "none",
      color: "white",
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
      top: "30%",
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
