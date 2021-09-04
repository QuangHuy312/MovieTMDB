import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    contentCarousel: {
      // backgroundImage: `url("https://dmitryvolkov.me/demo/hotflix2.1/main/img/home/home__bg.jpg")`,
      background: "rgba(0,0,0,0.9)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      padding: 70,
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
      position: "absolute",
      top: "45%",
      left: "45%",
      opacity: 0,
      zIndex: 99,
      fontSize: "35px !important",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "white",
      "&:hover": {
        color: "white",
        transform: " scale(1.5)",
        transition: "0.5s all",
      },
    },
    backDrop: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 0,
      "& img": {
        width: "100%",
        height: "100%",
        opacity: 0.2,
      },
    },

    trailer: {
      position: "absolute",
      width: 800,
      border: "none",
    },
  };
});

export default useStyle;
