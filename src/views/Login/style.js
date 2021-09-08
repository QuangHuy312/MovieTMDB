import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    backdrop: {
      backgroundImage:
        "url(http://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      opacity: 0.8,
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "100vh",
      padding: "40px 0px",
    },
    formControl: {
      padding: "40px 20px",
      backgroundColor: "#26252a",
      border: "2px solid #222028",
      borderRadius: 15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: "400px",
      opacity: 0.9,
    },

    contentInput: {
      width: "100%",
      marginBottom: 20,
    },
    textInput: {
      border: "2px solid transparent",
      width: "100%",
      color: "white",
    },
    placeholderInput: {
      color: "white",
    },
    checkBox: {
      color: "#f9ab00",
    },
    btnLogin: {
      width: "100%",
      border: "1px solid #f9ab00",
      padding: 10,
      color: "white",
      borderRadius: 10,
      transition: "all 0.5s",
      marginBottom: 15,
      "&:hover": {
        backgroundColor: "#4f3907",
      },
    },
    textSignUp: {
      paddingLeft: 10,
      fontSize: 14,
      color: "#f9ab00",
      cursor: "pointer",
    },
  };
});
export default useStyle;
