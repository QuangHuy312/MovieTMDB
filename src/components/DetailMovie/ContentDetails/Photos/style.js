import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    imagePhotos: {
      borderRadius: 15,
      height: 200,
      objectFit: "cover",
      width: "100%",
    },
  };
});
export default useStyle;
