import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    titleText: {
      textAlign: "center",
      paddingBottom: 20,
    },
    content: {
      paddingTop: 30,
    },
    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 330,
      //   marginLeft: 30,
      marginBottom: 35,
      boxShadow: "none",
      position: "relative",
    },

    contentCard: {
      opacity: 0.8,
      "&:hover": {
        opacity: 0.5,
        cursor: "pointer",
        "& $iconArrow": {
          opacity: 1,
        },
      },
    },
    media: {
      height: 270,
      borderRadius: 10,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transition: "all 0.5s",
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
