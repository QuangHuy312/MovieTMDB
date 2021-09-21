import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router";
const Profile = () => {
  const history = useHistory();
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
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          // inputProps={{
          //   name: "age",
          //   id: "age-native-simple",
          // }}
        >
          <option aria-label="None" value="" />
          <option>Ten</option>
          <option>Twenty</option>
          <option>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default Profile;
