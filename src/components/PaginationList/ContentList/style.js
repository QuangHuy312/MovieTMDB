import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    formControl: {
      minWidth: 100,
      color: "white",
    },
    select: {
      color: "#f9ab00",
      //   minHeight: "50px !important",
      //   marginTop: "30px !important",
    },
    btnFilter: {
      borderRadius: 15,
      padding: 10,
      transition: "all 0.5s",
      "&:hover": {
        backgroundColor: "#f9ab00",
      },
    },
  };
});

export default useStyle;
