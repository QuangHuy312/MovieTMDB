import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    content: {
      padding: "40px 25px",
      "& .MuiCard-root": {
        overflow: "initial",
      },
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      "& >h4": {
        fontWeight: "bold",
      },
    },
    contentCard: {
      position: "relative",
      borderRadius: 10,
      marginTop: 25,
      "& .MuiCardContent-root": {
        padding: 0,
      },
    },

    contentText: {
      backgroundColor: "rgba(3,37,65,0.7)",
      position: "absolute",
      inset: 0,
    },

    btnCreateList: {
      fontWeight: "bold",
      borderRadius: 7,
      color: "#fff",
    },

    imgCard: {
      height: 450,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        height: 400,
      },
      [theme.breakpoints.down("sm")]: {
        height: 350,
      },
    },

    textCard: {
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%,-45%)",
      width: "100%",
      textAlign: "center",
      color: "#fff",
      "& >p": {
        cursor: "pointer",
        fontSize: 30,
      },
      "& >h6": {
        paddingTop: 10,
        "& > span": {
          color: "#f9ab00",
          fontSize: 20,
          marginLeft: 5,
        },
      },
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
      zIndex: 9,
      boxShadow: "2px 23px 197px -5px rgba(183,6,6,1)",
      cursor: "pointer",
    },
  };
});

export default useStyle;
