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
    bgRating: {
      background: "#508d50",
      color: "white",
      position: "relative",
    },
    bgFavorite: {
      background: "#f864ab",
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
    },
    contentIcons: {
      width: 35,
      height: 35,
      borderRadius: "50%",
      border: "1px solid #999",
      cursor: "pointer",
      "&:hover": {
        transition: "ease-out 0.4s",
        background: "#f9ab00",
        "& $icons": {
          color: "white",
        },
        "& $rating": {
          color: "white",
        },
      },
    },
    icons: {
      textAlign: "center",
      fontSize: 5,
      paddingTop: 5,
      color: "#f9ab00",
    },
    iconRemove: { color: "red" },
    iconFavorite: { color: "#ec329d" },
    iconAddList: { color: "#663f55" },
    textIcon: {
      fontSize: 14,
      marginLeft: 12,
      marginTop: 8,
      color: "#72977b",
      position: "relative",
    },
    listIcons: {
      marginTop: 10,
      width: "70%",
    },

    starRate: {
      position: "absolute",
      top: "95%",
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
