import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    imgUser: {
      maxWidth: 50,
      maxHeight: 50,
      width: "100%",
      marginRight: 15,
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #262424",
      padding: 15,
      marginTop: 10,
    },
    createTime: {
      color: "#a67c7c",
      fontSize: 13,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    rating: {
      color: "#fff",
      border: "2px solid #f9ab00",
      width: 30,
      height: 30,
      borderRadius: "50%",
      lineHeight: "30px",
      fontSize: "13px",
      textAlign: "center",
      fontWeight: "bold",
      marginLeft: 10,
    },
    btnShowText: {
      color: "#a67c7c",
      cursor: "pointer",
      paddingLeft: 5,
      fontSize: 15,
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
    textReviews: {
      fontSize: 12,
      padding: "0 5px",
      wordBreak: "break-all",
    },
  };
});

export default useStyle;
