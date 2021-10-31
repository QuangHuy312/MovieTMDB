import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    backdrop: (props) => ({
      backgroundImage: props.backgroundImage,
      height: "auto",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      paddingTop: 100,
      paddingBottom: 50,
    }),
    contentAvatar: {
      display: "flex",
      width: "50%",
      margin: "0 auto",
      "& >img": {
        marginRight: 20,
        width: 80,
      },
    },
    circular: {
      width: 60,
      height: 60,
    },
    avatar: {
      width: "100%",
      borderRadius: "50%",
    },
    about: {
      marginLeft: 40,
      color: "#fff",
    },
    userName: {
      fontWeight: "bold",
      color: "white",
      fontSize: 30,
      paddingTop: 10,
      alignSelf: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 15,
      },
    },

    contentWrapper: {
      paddingTop: 20,
      display: "flex",
    },
    text: {
      padding: "10px 20px",
      fontSize: 15,
      [theme.breakpoints.down("sm")]: {
        fontSize: 13,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 10,
        padding: "15px 0 0 10px",
      },
    },
  };
});

export default useStyle;
