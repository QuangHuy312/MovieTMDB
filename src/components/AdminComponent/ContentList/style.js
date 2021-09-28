import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    content: {
      display: "flex",
      marginBottom: 20,
    },
    poster: {
      borderRadius: 10,
      width: 150,
      height: 200,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      cursor: "pointer",
      "&:hover": {
        color: "#f9ab00",
      },
    },
    contentInfo: {
      padding: "10px 15px",
      width: "100%",
    },
    date: {
      color: "#aa8181",
      fontSize: 13,
    },
    rating: {
      textAlign: "center",
      lineHeight: 2.3,
      fontSize: 15,
    },
    listIcons: {
      marginTop: 10,
      width: "70%",
      "& > ul > li": {
        paddingTop: 5,
        textAlign: "center",
      },
    },
    bgRating: {
      background: "#01d277",
      color: "white",
      position: "relative",
    },

    contentIcons: {
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: "1px solid #999",
      cursor: "pointer",
      zIndex: 2,
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
    },
    hoverIconFavorite: {
      "&:hover": {
        backgroundColor: "#f864ab",
        "& $textIconFavorite": {
          color: "#fff",
        },
      },
    },
    bgFavorite: {
      background: "#f864ab",
      "&:hover": {
        background: "#f9ab00",
      },
    },
    textIconFavorite: {
      color: "#f864ab",
      fontSize: 23,
    },

    textActiveIconFavorite: {
      color: "#fff",
      fontSize: 23,
    },

    hoverIconAddList: {
      "&:hover": {
        backgroundColor: "#665c5c",
        "& $iconAddList": {
          color: "white",
        },
      },
    },
    iconAddList: { color: "#663f55", textAlign: "center", paddingTop: 5 },
    hoverIconRemove: {
      "&:hover": {
        backgroundColor: "#f05d5d",
        "& $iconRemove": {
          color: "white",
        },
      },
    },
    iconRemove: { color: "red", textAlign: "center", paddingTop: 5 },

    textIcon: {
      fontSize: 14,
      marginLeft: 12,
      marginTop: 8,
      color: "#72977b",
      position: "relative",
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
