import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "70vh",
      flexDirection: "column",
      "& > h6": {
        padding: "30px 0",
      },
    },
  };
});

export default useStyle;
