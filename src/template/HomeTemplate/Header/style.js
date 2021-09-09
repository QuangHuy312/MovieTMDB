import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    content: {
      display: "flex",
      justifyContent: "space-between",
      height: 50,
      marginTop: 10,
    },
    logoHeader: {
      display: "flex",
      justifyContent: "center",
      padding: 5,
    },

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

    listNavbar: {
      display: "flex",
      color: "white",
      marginTop: 10,
    },
    navLink: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 20px",
      border: "transparent",
      transition: "all 0.5s",
      "&:hover": {
        color: "#f9ab00",
      },
    },
    avatarUser: {
      display: "inline-block",
      cursor: "pointer",
      fontSize: 30,
      marginRight: 10,
      color: "#f9ab00",
    },
  };
});

export default useStyle;
