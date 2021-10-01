import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 40,
      borderTop: "1px solid  #5a4c4c",
      "& .MuiListItem-gutters": {
        paddingLeft: 0,
      },
    },
    title: {
      paddingBottom: 10,

      "@media screen and (max-width:992px)": {
        paddingTop: 12,
        paddingBottom: 10,
        fontSize: 15,
      },
      // "@media screen and (max-width:768px)": {
      //   paddingTop: 12,
      //   paddingBottom: 5,
      //   fontSize: ,
      // },
    },
    list: {
      margin: 0,
      padding: 0,

      "& li": {
        marginTop: 10,
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
  };
});

export default useStyle;
