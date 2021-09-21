import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    content: {
      padding: "40px 0",
      "& .MuiCard-root": {
        overflow: "initial",
      },
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
      top: "45%",
      left: "50%",
      transform: "translate(-50%,-45%)",
      width: "100%",
      textAlign: "center",
      color: "#fff",
    },
    iconDelete: {
      position: "absolute",
      top: -15,
      right: -15,
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid red",
      backgroundColor: "#fff",
      textAlign: "center",
      color: "red",
      zIndex: 99,
      boxShadow: "2px 23px 197px -5px rgba(183,6,6,1)",
      cursor: "pointer",
    },
  };
});

export default useStyle;
