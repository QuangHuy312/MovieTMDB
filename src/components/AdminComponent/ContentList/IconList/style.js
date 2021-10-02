import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    ratedPoint: {
      fontSize: 15,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    contentIcons: {
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: "1px solid #999",
      cursor: "pointer",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        transition: "all 0.4s",
        backgroundColor: "#f9ab00",
        "& $icons": {
          color: "white",
        },
        "& $rating": {
          color: "white",
        },
      },
      [theme.breakpoints.down("sm")]: {
        width: 25,
        height: 25,
      },
    },
    hoverIconFavorite: {
      "&:hover": {
        backgroundColor: "#f864ab",
        "& $textIconFavorite": {
          color: "#fff",
        },
      },
    },
    hoverIconAddList: {
      "&:hover": {
        backgroundColor: "#665c5c",
        "& $textIconAddList": {
          color: "white",
        },
      },
    },

    hoverIconRemove: {
      "&:hover": {
        backgroundColor: "#f05d5d",
        "& $textIconRemove": {
          color: "white",
        },
      },
    },
    bgRating: {
      background: "#01d277",
      color: "white",
      position: "relative",
      textAlign: "center",
    },

    bgFavorite: {
      background: "#f864ab",
      "&:hover": {
        background: "#f9ab00",
      },
    },
    textIconFavorite: {
      color: "#f864ab",
    },

    textActiveIconFavorite: {
      color: "#fff",
    },

    textIconAddList: {
      color: "#663f55",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },

    textIconRemove: {
      color: "red",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },

    textIcon: {
      fontSize: 14,
      marginLeft: 12,
      marginTop: 8,
      color: "#72977b",
      position: "relative",
      [theme.breakpoints.down("xl")]: {
        marginLeft: 7,
        fontSize: 11,
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: 7,
        fontSize: 8,
      },
    },

    starRate: {
      position: "absolute",
      top: "95%",
      zIndex: 3,
    },

    contentAddList: {
      padding: "20px 0",
      background: "#01b4e4",
      position: "absolute",
      top: "-65%",
      left: "80%",
      width: "300px",
      height: "auto",
      zIndex: 9,
      color: "#fff",
      textAlign: "center",
      "& div": {
        justifyContent: "center",
      },
    },
    borderContentAddList: {
      position: "absolute",
      top: "35%",
      left: "-4%",
      borderStyle: "solid",
      borderColor: "#01b4e4",
      borderWidth: "10px",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
  };
});

export default useStyle;
