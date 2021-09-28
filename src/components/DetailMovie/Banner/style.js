import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    backdrop: {
      height: "700px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
    },

    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    poster: {
      height: "100%",
      maxHeight: 450,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: 10,
      "@media only screen and (max-width:768px)": {
        height: "60%",
      },
      "@media only screen and (max-width:500px)": {
        height: "30%",
      },
    },
    titleMovie: {
      fontWeight: "bold",
      paddingBottom: 15,
      "@media screen and (max-width:992px)": {
        fontSize: 40,
      },
      "@media screen and (max-width:600px)": {
        fontSize: 20,
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
      borderLeft: "1px solid white",
    },

    desc: {
      fontSize: 15,
      marginTop: 30,
      "@media screen and (max-width:768px)": {
        fontSize: 10,
        marginTop: 0,
      },
    },
    genresMovie: {
      color: "#f9ab00",
      marginRight: 10,
      cursor: "pointer",
      "@media screen and (max-width:768px)": {
        fontSize: 10,
      },
    },

    buttonWatch: {
      background: "#7f5e16",
      margin: "30px 0px",
      padding: 15,
      color: "#fff",
      borderRadius: 20,
      transition: "all 0.5s",
      "&:hover": {
        background: "#f9ab00",
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
    btnIcons: {
      transition: "all 0.5s",
      cursor: "pointer",
      marginLeft: 10,
      "&:hover": {
        color: "#f9ab00",
      },
    },

    btnClickIcons: {
      transition: "all 0.5s",
      cursor: "pointer",
      marginLeft: 10,
      color: "#f9ab00",
    },
  };
});

export default useStyle;
