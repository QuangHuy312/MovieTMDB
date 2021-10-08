import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      padding: "40px 25px",
      "& h4": {
        color: "#01b4e4",
        fontWeight: "bold",
        paddingBottom: 5,
        fontSize: 27,
        [theme.breakpoints.down("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 13,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 10,
        },
      },
      [theme.breakpoints.down("sm")]: {
        padding: "30px 20px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: 10,
      },
    },
    listName: {
      fontSize: 25,
      fontWeight: "bold",
      cursor: "pointer",
      padding: 10,
      color: "#f9ab00",
      [theme.breakpoints.down("sm")]: {
        fontSize: 17,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 10,
      },
    },

    title: {
      backgroundColor: "#01b4e4",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,

      [theme.breakpoints.down("xs")]: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      "& h5": {
        color: "#fff",
        padding: "15px 25px",
        [theme.breakpoints.down("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 14,
          padding: 10,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 12,
          padding: 5,
        },
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
    titleMovie: {
      paddingLeft: 5,
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
    },
    backdrop: {
      width: "100%",
      minHeight: 200,
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
      "& >p": {
        paddingTop: 10,
      },
    },

    activeSelect: {
      display: "block",
    },
  };
});

export default useStyle;
