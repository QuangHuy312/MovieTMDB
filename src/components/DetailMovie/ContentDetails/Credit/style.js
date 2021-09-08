import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles(() => {
  return {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      objectFit: "cover",
    },
    profile: {
      display: "flex",
    },
    name: {
      fontSize: 15,
    },
    character: {
      fontSize: 15,
      color: "#f9ab00",
    },
  };
});
export default useStyle;
