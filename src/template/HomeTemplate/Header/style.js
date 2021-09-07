import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    navContent: {
      backgroundColor: "#1a191f",
      padding: 10,
      borderBottom: "1px solid #5a4c4c",
      position: "fixed",
      width: "100%",
      zIndex: 99,
      transition: "all 0.5s",
    },

    scrollNav: {
      backgroundColor: "transparent",
    },
  };
});

export default useStyle;
