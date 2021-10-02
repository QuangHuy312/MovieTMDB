import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    imgUser: {
      maxWidth: 50,
      maxHeight: 50,
      width: "100%",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      border: "1px solid #262424",
      padding: 15,
    },
    createTime: {
      color: "#a67c7c",
      fontSize: 13,
    },
    rating: {
      color: "white",
      border: "2px solid #f9ab00",
      width: 30,
      height: 30,
      borderRadius: "50%",
      lineHeight: "30px",
      fontSize: "13px",
      textAlign: "center",
      fontWeight: "bold",
    },
    btnShowText: {
      color: "#a67c7c",
      cursor: "pointer",
      paddingLeft: 10,
      fontSize: 15,
    },
    textReviews: {
      fontSize: 12,
      wordBreak: "break-all",
    },
  };
});

export default useStyle;
