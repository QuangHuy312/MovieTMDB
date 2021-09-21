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
  };
});

export default useStyle;
