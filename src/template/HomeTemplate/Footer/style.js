import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 40,
      borderTop: "1px solid  #5a4c4c",
    },
    title: {
      paddingBottom: 10,
      "@media screen and (max-width:768px)": {
        paddingTop: 12,
        paddingBottom: 5,
      },
    },
    list: {
      margin: 0,
      padding: 0,
      "& li": {
        marginTop: 15,
        color: "#877474",
        "& a": {
          transition: "all 0.5s",
          color: "gray",
          "&:hover": {
            color: "#f9ab00",
          },
        },
      },
    },
    contact: {
      paddingTop: 30,
      "& a": {
        marginRight: 15,
        transition: "all 0.5s",
        color: "white",
        "&:hover": {
          color: "#f9ab00",
        },
      },
    },
  };
});

export default useStyle;
