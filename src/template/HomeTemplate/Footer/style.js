import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 40,
      borderTop: "1px solid  #5a4c4c",
      "& .MuiListItem-gutters": {
        paddingLeft: 0,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
    },
    title: {
      paddingBottom: 10,
      [theme.breakpoints.down("lg")]: {
        paddingTop: 12,
        paddingBottom: 10,
        fontSize: 15,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
    list: {
      margin: 0,
      padding: 0,

      "& li": {
        marginTop: 10,
        color: "#877474",
        [theme.breakpoints.down("sm")]: {
          marginTop: 0,
        },
        "& a": {
          transition: "all 0.5s",
          color: "gray",
          [theme.breakpoints.down("sm")]: {
            fontSize: 12,
          },
          "&:hover": {
            color: "#f9ab00",
          },
        },
      },
    },
  };
});

export default useStyle;
