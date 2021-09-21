import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 20,
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
    },
    contentCard: {
      backgroundColor: "rgba(3,37,65,0.7)",
      position: "relative",
      borderRadius: 10,
      marginTop: 25,
    },
    btnCreateList: {
      fontWeight: "bold",
      borderRadius: 7,
      color: "#fff",
    },

    imgCard: {
      height: 400,
      width: "100%",
    },

    textCard: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      textAlign: "center",
      color: "#fff",
    },
  };
});

export default useStyle;
