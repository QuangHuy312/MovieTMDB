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
          color: "#fff",
        },
        "& $rating": {
          color: "#fff",
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
          color: "#fff",
        },
      },
    },

    hoverIconRemove: {
      "&:hover": {
        backgroundColor: "#f05d5d",
        "& $textIconRemove": {
          color: "#fff",
        },
      },
    },
    bgRating: {
      background: "#01d277",
      color: "#fff",
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
      paddingTop: 5,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },

    textIconRemove: {
      color: "red",
      paddingTop: 5,
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
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
    contentRating: {
      backgroundColor: "#032541",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      position: "relative",
      "& .MuiRating-iconEmpty": {
        color: "#999",
      },
      "&:after": {
        content: "''",
        position: "absolute",
        top: -8,
        borderStyle: "solid",
        borderWidth: "0 10px 10px",
        borderColor: "#032541 transparent",
        display: "block",
        width: 0,
        zIndex: 1,
      },
    },

    contentAddList: {
      padding: "20px 0",
      background: "#032541",
      width: 300,
      zIndex: 9,
      color: "#fff",
      position: "relative",
      textAlign: "center",
      "& > span": {
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
        "&:hover": {
          color: "#f9ab00",
          transition: "all 0.5s",
        },
      },
      "&:after": {
        content: "''",
        position: "absolute",
        top: -10,
        left: "50%",
        borderStyle: "solid",
        borderWidth: "0 10px 10px",
        borderColor: "#01b4e4 transparent",
        width: 0,
        zIndex: 1,
      },
      [theme.breakpoints.down("sm")]: {
        width: 200,
      },
    },
    formControl: {
      width: "85%",
      marginTop: 15,
      "& .MuiSelect-select": {
        border: "1px solid #625e5e",
      },
    },
    inputForm: {
      paddingLeft: 10,
      fontSize: 14,
      color: "#fff",

      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    titleMovie: {
      marginLeft: 10,
      color: "#f9ab00",
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
  };
});

export default useStyle;
