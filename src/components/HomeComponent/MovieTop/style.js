import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      height: 600,
      position: "relative",
      [theme.breakpoints.down("md")]: {
        height: 400,
      },

      [theme.breakpoints.down("sm")]: {
        height: 350,
      },
      [theme.breakpoints.down("xs")]: {
        height: 300,
        "& $buttonWatchMobile": {
          display: "flex",
        },
      },
    },
    content: {
      position: "absolute",
      inset: 0,
      zIndex: 3,
      paddingTop: 30,
    },
    overlay: {
      backgroundImage: (props) => props.backgroundImage,
      opacity: 0.2,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      position: "absolute",
      inset: 0,
      zIndex: 1,
    },
    poster: {
      width: "100%",
      height: 500,
      objectFit: "cover",
      borderRadius: 10,
      [theme.breakpoints.down("md")]: {
        height: 400,
      },
      [theme.breakpoints.between("sm", "md")]: {
        height: 300,
      },
      [theme.breakpoints.down("xs")]: {
        height: 200,
      },
    },
    titleMovie: {
      fontWeight: "bold",
      paddingBottom: 15,
      fontSize: 30,

      [theme.breakpoints.down("md")]: {
        fontSize: 20,
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: 15,
        paddingBottom: 5,
      },
    },
    age: {
      backgroundColor: "red",
      marginRight: 15,
    },
    releaseDate: {
      marginLeft: 20,
      color: "#f9ab00",
    },
    titleRate: {
      padding: "10px 0px",
      fontSize: 35,

      [theme.breakpoints.down("md")]: {
        fontSize: 20,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
        paddingTop: 0,
      },
    },
    desc: {
      fontSize: 15,
      [theme.breakpoints.down("md")]: {
        fontSize: 10,
      },
    },
    genresMovie: {
      color: "#f9ab00",
      margin: 10,
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        fontSize: 10,
      },
    },
    descTab: { display: "none" },
    buttonWatch: {
      background: "#7f5e16",
      margin: "30px 0px",
      padding: 15,
      color: "#fff",
      borderRadius: 10,
      transition: "all 0.5s",
      "&:hover": {
        background: "#f9ab00",
      },
      [theme.breakpoints.down("md")]: {
        padding: 10,
        borderRadius: 15,
        margin: "15px 0",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    buttonWatchMobile: {
      width: "100%",
      fontSize: 5,
      background: "#7f5e16",
      marginTop: 10,
      color: "#fff",
      borderRadius: 5,
      transition: "all 0.5s",
      display: "none",
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
