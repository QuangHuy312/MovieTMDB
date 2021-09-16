import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    backdrop: (props) => ({
      backgroundImage: props.backgroundImage,
      height: 300,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),

    content: {
      paddingTop: 120,
      display: "flex",
    },
    avatar: {
      width: 150,
      height: 150,
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
    },

    contentWrapper: {
      paddingTop: 20,
      display: "flex",
    },
    text: {
      padding: "10px 20px",
      fontSize: 15,
    },
  };
});

export default useStyle;
