import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    content: {
      padding: "40px 25px",
      "& h4": {
        color: "#01b4e4",
        fontWeight: "bold",
        paddingBottom: 5,
        fontSize: 27,
        [theme.breakpoints.down("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 13,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 10,
        },
      },
      [theme.breakpoints.down("sm")]: {
        padding: "30px 20px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: 10,
      },
    },
    title: {
      backgroundColor: "#01b4e4",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,

      [theme.breakpoints.down("xs")]: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      "& h5": {
        color: "#fff",
        padding: "15px 25px",
        [theme.breakpoints.down("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 14,
          padding: 10,
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: 12,
          padding: 5,
        },
      },
    },

    contentForm: {
      margin: "15px 0 0 30px",
    },
    btnSubmit: {
      borderRadius: 6,
      backgroundColor: "#01b4e4",
      color: "#fff",
    },
  };
});

export default useStyle;
