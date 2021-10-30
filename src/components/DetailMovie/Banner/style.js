import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    backdrop: (props) => ({
      height: "auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: props.backgroundImage,
    }),

    content: {
      paddingTop: 100,
      [theme.breakpoints.down("md")]: {
        paddingTop: 70,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: 50,
      },
      [theme.breakpoints.down("xs")]: {
        paddingTop: 30,
      },
    },
    poster: {
      width: "100%",
      minHeight: 350,
      maxHeight: 350,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: 10,
      [theme.breakpoints.down("sm")]: {
        minHeight: 200,
      },
    },

    buttonWatch: {
      border: "2px solid #7f5e16",
      margin: "30px 0px",
      color: "#fff",
      borderRadius: 5,
      width: "100%",
      padding: "10px 0",
      transition: "all 0.5s",
      "&:hover": {
        background: "#f9ab00",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    titleMovie: {
      fontWeight: 500,
      paddingBottom: 15,
      [theme.breakpoints.down("lg")]: {
        fontSize: 40,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 30,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
    titleData: {
      color: "#f9ab00",
      marginLeft: 5,
      cursor: "pointer",
      opacity: 0.8,
      transition: "all 0.5s",
      "&:hover": { opacity: 1 },
    },
    circularRating: {
      display: "flex",
      padding: "15px 0",
      alignItems: "center",
      justifyContent: "center",
      "& > div": {
        width: 60,
        height: 60,
      },
      "& .CircularProgressbar-text": {
        dominantBaseline: "middle",
        textAnchor: "middle",
      },
    },
    textUserScore: {
      fontSize: 15,
      marginLeft: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    bgIcons: {
      backgroundColor: "#032541",
      "&:hover": {
        backgroundColor: "rgb(255,255,255,0.4)",
      },
    },
    voteCount: {
      fontSize: 15,
      paddingLeft: 15,
      color: "#f9ab00",
    },
    age: {
      backgroundColor: "red",
      marginRight: 15,
    },
    releaseDate: {
      marginLeft: 20,
      color: "#f9ab00",
      borderLeft: "1px solid #fff",
    },

    desc: {
      fontSize: 15,
      marginRight: 20,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },

    trailer: {
      position: "absolute",
      width: "70%",
      height: "70%",
      border: "none",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    contentIcons: {
      display: "flex",
      marginTop: 25,
      "& >div": {
        marginRight: 15,
      },
    },
    btnIcons: {
      transition: "all 0.5s",
      cursor: "pointer",
      fontSize: 15,
      color: "#fff",
    },

    btnActiveIconsFavorite: {
      color: "#d343a8",
      "&:hover": {
        color: "#f9ab00",
      },
    },
    btnActiveIconsAddList: {
      color: "#c06969",
      "&:hover": {
        color: "#f9ab00",
      },
    },
    btnActiveIconsRating: {
      color: "#ffb400",
      "&:hover": {
        color: "#f9ab00",
      },
    },

    trailerMovie: {
      width: "100%",
      borderRadius: 20,
    },
    iconPlay: {
      padding: 5,
      backgroundColor: "#fff",
      width: 50,
      height: 50,
      borderRadius: "50%",
      color: "#f9ab00",
      transition: "ease-in 0.5s",
      border: "8px solid #999",
      "&:hover": {
        backgroundColor: "#f9ab00",
        color: "#fff",
      },
    },
    contentRating: {
      backgroundColor: "#032541",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      position: "relative",
      "& .MuiRating-iconEmpty": {
        color: "#999",
      },
      "& .MuiSvgIcon-root": {
        cursor: "pointer",
      },
      "& >span": { marginLeft: 10 },
      "&:after": {
        content: "''",
        position: "absolute",
        top: -8,
        borderStyle: "solid",
        borderWidth: "0 10px 10px",
        borderColor: "#032541 transparent",
        display: "block",
        width: 0,
        zIndex: 1,
      },
    },

    scrollBars: {
      backgroundColor: "#f9ab00",
      borderRadius: "3px",
      width: "3px",
      cursor: "pointer",
    },
    contentVideo: {
      width: "100% !important",
      height: "400px !important",
      "& div": {
        borderRadius: 15,
      },

      [theme.breakpoints.down("md")]: {
        height: "370px !important",
      },
      [theme.breakpoints.down("sm")]: {
        height: "300px !important",
      },
    },
  };
});

export default useStyle;
