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
    activeTitle: {
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

    contentCard: {
      "&:hover": {
        cursor: "pointer",
        transition: "all 0.2s",
        "& $textCard": {
          display: "block",
        },
        "& $backdrop:before": {
          display: "block",
        },
      },
    },
    backdrop: {
      width: "100%",
      height: 200,
      overflow: "hidden",
      border: "1px solid #999",
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "relative",
      marginTop: 10,
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "none",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    },
    textCard: {
      position: "absolute",
      width: "100%",
      height: "20%",
      backgroundColor: "#01b4e4",
      textAlign: "center",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      display: "none",
      color: "#fff",
    },

    activeSelect: {
      display: "block",
    },
  };
});

export default useStyle;
