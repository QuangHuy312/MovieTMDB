import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => {
  return {
    isActive: {
      color: "#f9ab00",
    },
    navLink: {
      transition: "all 0.3s",
      position: "relative",
      "&:hover": {
        color: "#f9ab00",
        "&::after": {
          width: "100%",
          transition: "all 0.5s linear",
        },
      },
      "&::after": {
        content: "''",
        position: "absolute",
        bottom: -5,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        borderBottom: "3px solid #f9ab00",
      },
    },
  };
});
export default useStyle;
