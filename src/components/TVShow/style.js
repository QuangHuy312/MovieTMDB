import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    content: {
      paddingTop: 40,
      position: "relative",
    },
    card: {
      backgroundColor: "transparent",
    },
    contentMedia: {
      marginLeft: "20px",
      height: 300,
      borderRadius: 10,
      position: "relative",
      "&:hover": {
        "& $hoverContent": {
          transform: "scale(1)",
          transition: "0.6s ease",
        },
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
      borderRadius: 25,
      padding: 15,
      fontSize: 14,
      transition: "all 0.5s",
      "&:hover": {
        backgroundColor: "#7f5e16",
      },
    },
    arrowContentNext: {
      position: "absolute",
      top: "-3%",
      right: "7%",
      cursor: "pointer",
    },

    arrowContentPrev: {
      left: "87%",
      right: 0,
      "@media screen and (max-width:992px)": {
        left: "85%",
      },
      "@media screen and (max-width:780px)": {
        left: "81%",
      },
      "@media screen and (max-width:600px)": {
        left: "78%",
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
