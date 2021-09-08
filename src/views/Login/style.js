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
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: "400px",
    },

    contentInput: {
      width: "100%",
      marginBottom: 20,
    },
    textInput: {
      color: "#fff",
      border: "2px solid transparent",
      fontSize: 20,
      width: "100%",
    },
    placeholderInput: {
      color: "white",
    },
    checkBox: {
      color: "#f9ab00",
    },
  };
});
export default useStyle;
