import { makeStyles } from "@material-ui/styles";
const style = makeStyles(() => {
  return {
    "@keyframes dots": {
      "50%": {
        opacity: 0,
        transform: "transcale(0.7)",
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    dotsLoading: {
      "& >span": {
        width: 15,
        height: 15,
        margin: "0 7px",
        backgroundColor: "#5f74dc",
        borderRadius: "50%",
        display: "inline-block",
        animation: "$dots 0.8s infinite ease-in-out",
      },
      "& >span:nth-child(2)": {
        backgroundColor: "#5f74dc",
        animationDelay: "0.2s",
      },
      "& >span:nth-child(3)": {
        backgroundColor: "#5f74dc",
        animationDelay: "0.4s",
      },
    },
  };
});

export default style;
