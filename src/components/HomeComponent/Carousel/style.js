import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    contentCarousel: {
      background: "rgba(0,0,0,0.1)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: 700,
      padding: 0,
      position: "relative",
      [theme.breakpoints.down("md")]: {
        height: 500,
      },

      [theme.breakpoints.down("sm")]: {
        height: 400,
      },
      [theme.breakpoints.down("xs")]: {
        height: "auto",
      },
      "& .slick-slider > button": {
        display: "none !important",
      },
    },

    slideCarousel: {
      position: "absolute",
      top: "14%",
      left: "10%",
      bottom: 0,
      right: "10%",
      [theme.breakpoints.down("sm")]: {
        width: "70%",
        left: "15%",
        right: "15%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "70%",
        top: "25%",
        left: "15%",
        right: "15%",
      },
      "& h4": {
        color: "#fff",
        fontSize: 40,
        paddingTop: 30,
        [theme.breakpoints.down("md")]: {
          fontSize: 25,
          padding: 0,
          paddingTop: 35,
        },
        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
    },

    contentPoster: {
      opacity: 0.8,
      padding: 20,
      width: "100%",
      "& > img": {
        minHeight: 400,
        maxHeight: 400,
        width: "100%",
        borderRadius: 15,
        objectFit: "cover",
        transform: "scale(1)",
        [theme.breakpoints.down("lg")]: {
          minHeight: 300,
          maxHeight: 300,
        },
        [theme.breakpoints.down("sm")]: {
          minHeight: 200,
          maxHeight: 200,
        },
        [theme.breakpoints.down("xs")]: {
          minHeight: 130,
          maxHeight: 130,
        },
      },
      "&:hover": {
        opacity: 1,
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
        background: "#fff",
        color: "#f9ab00",
      },
    },
    imgBackDrop: {
      width: "100%",
      height: 700,
      objectFit: "cover",
      opacity: 0.4,
      [theme.breakpoints.down("md")]: {
        height: 500,
      },
      [theme.breakpoints.down("sm")]: {
        height: 400,
      },
      [theme.breakpoints.down("xs")]: {
        height: "auto",
      },
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
