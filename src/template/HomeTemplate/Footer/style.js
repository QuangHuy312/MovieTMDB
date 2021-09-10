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
      marginRight: 20,
      "& li": {
        marginTop: 10,
        color: "#877474",
        transition: "all 0.5s",
        "&:hover": {
          color: "#f9ab00",
        },
      },
    },
    contact: {
      paddingTop: 30,
      "& a": {
        marginRight: 15,
        transition: "all 0.5s",
        "&:hover": {
          color: "#f9ab00",
        },
      },
    },
  };
});

export default useStyle;
