import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => {
  return {
    content: {
      paddingTop: 40,
      paddingBottom: 20,
      borderTop: "1px solid #5a4c4c",
      [theme.breakpoints.down("sm")]: {
        paddingTop: 20,
      },
    },
    card: {
      backgroundColor: "transparent",
      overflow: "hidden",
      maxWidth: 350,
      height: 370,
      boxShadow: "none",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: 350,
      },

      [theme.breakpoints.down("xs")]: {
        height: 300,
      },
    },
    textContent: {
      padding: 0,
      marginTop: 10,
    },
    contentCard: {
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer",
        "& $media": {
          transition: "all 0.9s",
          transform: "scale(1.2)",
        },
        "& $media:before": {
          display: "block",
        },
        "& $iconArrow": {
          opacity: 1,
        },
      },
    },
    media: {
      height: 270,
      borderRadius: 10,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transition: "all 0.5s",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "none",
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      [theme.breakpoints.down("sm")]: {
        height: 280,
        borderRadius: 5,
      },
      [theme.breakpoints.down("xs")]: {
        height: 200,
        borderRadius: 5,
      },
    },
    title: {
      color: "#fff",
      transition: "all 0.5s",
      cursor: "pointer",
      textOverflow: "ellipsis",
      "&:hover": {
        color: "#f9ab00",
      },
      "& >span": {
        color: "#f9ab00",
        marginLeft: 5,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },

    rated: {
      color: "#fff",
      border: "2px solid #f9ab00",
      width: 30,
      height: 30,
      borderRadius: "50%",
      lineHeight: "30px",
      fontSize: "13px",
      textAlign: "center",
      position: "absolute",
      fontWeight: "bold",
      top: "5%",
      left: "8%",
    },

    iconArrow: {
      border: "3px solid #fff",
      top: "35%",
      left: "45%",
      width: 40,
      height: 40,
      fontSize: "40px",
      opacity: 0,
      transition: "all 0.5s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.3)",
        border: "2px solid #f9ab00",
        background: "#fff",
        color: "#f9ab00",
      },
    },

    genre: {
      color: "#f9ab00",
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr 1fr",
      },
      "& >p": {
        fontSize: 12,
        marginTop: 5,
        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
        },
      },
    },
    pagination: {
      display: "flex",
      justifyContent: "center",

      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
        "& .MuiPaginationItem-root": {
          padding: 0,
        },
      },
    },
    bgSkeleton: {
      backgroundColor: "#ccc",
      opacity: 0.3,
    },
  };
});

export default useStyle;
