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
      padding: "10px 0",
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
    contentRight: {
      padding: "20px 30px",
      [theme.breakpoints.down("xs")]: {
        padding: 15,
      },
      "& >div": {
        display: "flex",
        justifyContent: "space-between",
        "& >h6": {
          fontSize: 20,
          fontWeight: "bold",
          [theme.breakpoints.down("xs")]: {
            fontSize: 15,
          },
        },
        "& .MuiButton-containedPrimary": {
          fontSize: 12,
          borderRadius: 5,
          [theme.breakpoints.down("xs")]: {
            fontSize: 9,
            padding: 5,
          },
        },
      },
      "& .MuiOutlinedInput-root": {
        paddingBottom: 5,
      },
    },

    form: {
      marginTop: 30,
      [theme.breakpoints.down("xs")]: {
        marginTop: 15,
      },
      "& .MuiInputLabel-outlined": {
        fontSize: 15,
        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 8,
        },
      },
      "& .MuiSvgIcon-root": {
        [theme.breakpoints.down("xs")]: {
          fontSize: 20,
        },
      },
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
      [theme.breakpoints.down("xs")]: {
        fontSize: 12,
      },
    },

    contentTitleAdded: {
      padding: "20px 0",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0",
      },
      "& >div >span": {
        marginRight: 15,
        [theme.breakpoints.down("xs")]: {
          fontSize: 10,
          marginRight: 10,
        },
      },
      "& .MuiSvgIcon-root": {
        [theme.breakpoints.down("sm")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 15,
        },
      },
    },

    root: {
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    card: { padding: "0 15px 15px 20px", marginTop: 10 },
    contentMovieSearch: {
      display: "flex",
      marginBottom: 20,
      "& .MuiCardContent-root": {
        width: "100%",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: 0,
        width: 50,
      },
    },
    poster: {
      borderRadius: 10,
      minWidth: 150,
      minHeight: 200,
      marginBottom: 20,
      backgroundSize: "cover",
      backgroundPosition: "center",

      [theme.breakpoints.down("md")]: {
        minWidth: 100,
        maxHeight: 140,
        minHeight: 120,
      },
    },
    titleMovieSearch: {
      fontWeight: "bold",
      fontSize: 20,
      cursor: "pointer",
      width: "100%",
      "&:hover": {
        color: "#f9ab00",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    titleMovieSearchMobile: {
      fontWeight: "bold",
      fontSize: 16,
      cursor: "pointer",
      width: "100%",
      marginBottom: 5,
    },
    circularRate: {
      width: 60,
      height: 60,
      padding: "7px 10px 0",
      [theme.breakpoints.down("sm")]: {
        width: 50,
        height: 50,
        padding: 0,
      },
      [theme.breakpoints.down("xs")]: {
        width: 30,
        height: 30,
      },
    },
    date: {
      color: "#aa8181",
      fontSize: 13,
      width: 150,

      [theme.breakpoints.down("md")]: {
        fontSize: 12,

        width: 100,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        width: 50,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 9,
      },
    },
    rating: {
      textAlign: "center",
      lineHeight: 2.3,
      fontSize: 15,
    },
    overview: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    overviewMobile: {
      fontSize: 12,
    },
    posterNoItem: {
      height: 200,
    },
  };
});

export default useStyle;
