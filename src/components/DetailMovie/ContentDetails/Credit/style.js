import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      objectFit: "cover",
      marginRight: 15,
      [theme.breakpoints.down("sm")]: {
        width: 40,
        height: 40,
        marginRight: 10,
      },
    },
    name: {
      fontSize: 15,
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
    character: {
      fontSize: 15,
      color: "#f9ab00",
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
  };
});
export default useStyle;
