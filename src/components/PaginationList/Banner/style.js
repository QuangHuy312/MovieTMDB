import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    banner: {
      backgroundImage:
        "url(https://dmitryvolkov.me/demo/hotflix2.1/main/img/section/section.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      paddingTop: 150,
    },
    content: {
      display: "flex",
      justifyContent: "flex-end",
    },
    iconHome: {
      transition: "all 0.5s",
      fontSize: 21,
      color: "white",
      "&:hover": {
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
