import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getCreatedListAction } from "../../redux/action/DashBoardManagerAction";
const DashBoard = ({ infoUser, sessionId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreatedListAction(infoUser.id, sessionId));
  }, []);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return <div>dfasfd</div>;
};

export default DashBoard;
