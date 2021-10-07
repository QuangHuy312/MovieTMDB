import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    formControl: {
      minWidth: 100,
      color: "#fff",
      marginBottom: 20,
    },
    slider: {
      width: 100,
      color: "#f9ab00",
      "& .MuiSlider-root": {
        padding: 0,
      },
      [theme.breakpoints.down("sm")]: {
        width: 150,
      },
    },
    contentRating: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        marginBottom: 20,
        "& $slider": {
          marginLeft: 30,
        },
      },
    },
    userRating: {
      color: "#f9ab00",
      fontSize: 14,
      paddingLeft: 10,
    },
    select: {
      color: "#f9ab00",
    },
    datePicker: {
      width: 150,
      margin: 0,
    },
    btnFilter: {
      "& >button": {
        borderRadius: 10,
        padding: 10,
        transition: "all 0.5s",
        "&:hover": {
          backgroundColor: "#f9ab00",
        },
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 20,
        textAlign: "center",
      },
    },
    contentDate: {
      "& .MuiSvgIcon-root": {
        color: "white ",
      },
      "& .MuiInputBase-input": {
        color: "#f9ab00",
      },
    },
  };
});

export default useStyle;
