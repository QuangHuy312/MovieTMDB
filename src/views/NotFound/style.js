import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => {
  return {
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "70vh",
      flexDirection: "column",
    },
  };
});

export default useStyle;
