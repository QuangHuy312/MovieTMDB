import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    content: {
      padding: "40px 0px",
      "& h4": {
        color: "#01b4e4",
        fontWeight: "bold",
        paddingBottom: 5,
      },
    },
    title: {
      backgroundColor: "#01b4e4",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 10,
      "& h5": {
        color: "#fff",
        padding: "15px 25px",
      },
    },

    contentList: {
      padding: 15,
    },
    active: {
      color: "#01b4e4",
    },
    textList: {
      paddingBottom: 15,
      fontSize: 17,
      cursor: "pointer",
      transition: "all 0.4s",
      "&:hover": {
        color: "#01b4e4",
      },
    },
    contentItem: {
      display: "flex",
      marginBottom: 10,
    },
    infoItem: {
      padding: "10px 15px",
      width: "100%",
    },
    titleItem: {
      fontWeight: "bold",
      fontSize: 20,
      cursor: "pointer",
      "&:hover": {
        color: "#f9ab00",
      },
    },
    date: {
      color: "#aa8181",
      fontSize: 13,
    },
    poster: {
      borderRadius: 10,
      minWidth: 150,
      height: 150,
    },
  };
});

export default useStyle;
