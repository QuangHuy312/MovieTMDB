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
      objectFit: "cover",
      "@media only screen and (max-width:768px)": {
        height: "auto",
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
      "@media screen and (max-width:768px)": {
        fontSize: 20,
      },
    },
    desc: {
      fontSize: 15,
      "@media screen and (max-width:768px)": {
        fontSize: 10,
      },
    },
    genresMovie: {
      color: "#f9ab00",
      margin: 10,
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
  };
});

export default useStyle;
