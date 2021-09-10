import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    banner: {
      backgroundImage: "url(http://picsum.photos/200)",
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
      fontSize: 16,
      "&:hover": {
        color: "#f9ab00",
      },
    },
  };
});
export default useStyle;
