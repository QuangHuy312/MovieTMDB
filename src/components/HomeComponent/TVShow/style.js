import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 30,
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 25,
      "& >h4": {
        fontSize: 30,
        [theme.breakpoints.down("sm")]: {
          fontSize: 20,
        },
      },
      "& >button": { borderRadius: 10 },
    },

    card: {
      backgroundColor: "transparent",
    },
    slider: {
      padding: 20,
      [theme.breakpoints.down("sm")]: {
        "& .slick-next": {
          right: -15,
        },
        "& .slick-prev": {
          left: -15,
        },
      },
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
  };
});
export default useStyle;
