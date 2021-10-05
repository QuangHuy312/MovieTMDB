import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    contentList: {
      paddingTop: 15,
      "& .MuiListItem-gutters": {
        padding: "10px 0",
      },
    },

    textList: {
      paddingBottom: 10,
      fontSize: 17,
      cursor: "pointer",
      transition: "all 0.4s",
      "&:hover": {
        color: "#01b4e4",
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: 13,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 10,
        padding: 0,
      },
    },
    active: {
      color: "#01b4e4",
    },
    disabled: {
      pointerEvents: "none",
    },
  };
});

export default useStyle;
