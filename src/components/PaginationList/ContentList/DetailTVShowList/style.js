import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 20,
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
      "& .MuiMenu-paper": {
        marginTop: 45,
      },
    },
  };
});

export default useStyle;
