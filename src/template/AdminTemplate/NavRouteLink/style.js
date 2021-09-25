import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => {
  return {
    listNavbar: {
      display: "flex",
      marginTop: 15,
    },
    navLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 35px",
      border: "transparent",
      transition: "all 0.5s",
      "&:hover": {
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
