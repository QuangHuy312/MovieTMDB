import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    contentCarousel: {
      background: "rgba(0,0,0,0.1)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      padding: 0,
      position: "relative",
    },

    slideCarousel: {
      position: "absolute",
      top: "13%",
      left: "10%",
      bottom: 0,
      right: "10%",
      "& h1": {
        color: "white",
        fontSize: 40,
        paddingTop: 30,
      },
      "& img": {
        height: "100%",
        width: "100%",
        borderRadius: 25,
        objectFit: "cover",
        transform: "scale(1)",
        "&::before": {
          content: "",
          width: 0,
          height: 0,
          background: "red",
        },
      },
    },
    contentPoster: {
      "&:hover": {
        opacity: 0.6,
        transform: "scale(1.1)",
        transition: "0.5s all",
        "& $iconPlay": {
          opacity: 1,
        },
      },
    },
    iconPlay: {
      border: "3px solid #fff",
      top: "45%",
      left: "45%",
      width: 40,
      height: 40,
      fontSize: "40px",
      opacity: 0,
      transition: "all 0.5s",
      cursor: "pointer",
      position: "absolute",
      borderRadius: "50%",
      "&:hover": {
        transform: "scale(1.3)",
        border: "2px solid #f9ab00",
        background: "white",
        color: "#f9ab00",
      },
    },
    imgBackDrop: {
      width: "100%",
      height: "700px",
      objectFit: "cover",
      opacity: 0.4,
    },

    trailer: {
      position: "absolute",
      width: 800,
      border: "none",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  };
});

export default useStyle;
