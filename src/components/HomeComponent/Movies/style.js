import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      borderBottom: "1px solid #5a4c4c",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
      "& .MuiTabs-indicator	": {
        background: "transparent !important",
      },
      "& .MuiTab-wrapper": {
        fontSize: 17,
        width: "auto",
        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
      },

      "& .Mui-selected": {
        minWidth: 120,
        "& .MuiTab-wrapper": {
          borderBottom: "3px solid blue",
        },
      },
    },
  };
});

export default useStyle;
