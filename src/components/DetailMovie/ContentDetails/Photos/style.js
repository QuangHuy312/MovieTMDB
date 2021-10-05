import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => {
  return {
    imagePhotos: {
      borderRadius: 10,
      height: 200,
      objectFit: "cover",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 150,
        borderRadius: 5,
      },
      [theme.breakpoints.down("xs")]: {
        height: 100,
        borderRadius: 5,
      },
    },
  };
});
export default useStyle;
