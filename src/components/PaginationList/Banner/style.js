import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    banner: {
      backgroundImage: props => `url(${props.BACK_DROP})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 300,
      paddingTop: 150,
      [theme.breakpoints.down("sm")]: {
        height: 200,
        paddingTop: 100,
      },
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        "& > h4": {
          fontSize: 20,
        },
      },
    },

    textRight: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      "& .MuiSvgIcon-root": {
        fontSize: 15,
        marginRight: 5,
      },
      "& > h5": {
        [theme.breakpoints.down("sm")]: {
          fontSize: 15,
        },
      },
    },
    iconHome: {
      transition: "all 0.5s",
      fontSize: 25,
      color: "#fff",
      marginRight: 10,
      "&:hover": {
        color: "#f9ab00",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
    },
  };
});
export default useStyle;
