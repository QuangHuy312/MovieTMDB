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
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    },
    date: {
      color: "#aa8181",
      fontSize: 13,
    },
    rating: {
      textAlign: "center",
      lineHeight: 1.7,
      fontSize: 20,
    },
    contentRating: {
      background: "#508d50",
      color: "white",
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
      color: "#72977b",
    },
    listIcons: {
      marginTop: 10,
      width: "70%",
    },
  };
});

export default useStyle;
