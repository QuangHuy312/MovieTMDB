import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as yup from "yup";
import { UserManagerAction } from "../../redux/action/UserManagerAction";
import useStyle from "./style";
import BACK_DROP from "../../assets/backdrop_login.jpg";

let schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const {
    backdrop,
    content,
    textInput,
    formControl,
    contentInput,
    checkBox,
    btnLogin,
    textSignUp,
    btnGoBack,
  } = useStyle({ BACK_DROP });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!isValid) return;
    dispatch(
      UserManagerAction(
        values,
        () => history.goBack(),
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        (mes) => {
          enqueueSnackbar(mes, { variant: "error" });
        }
      )
    );
  };
  const { values, handleChange, isValid, errors, handleBlur, touched } =
    useFormik({
      initialValues: { username: "quanghuyfly1997", password: "Huy03120252" },
      validationSchema: schema,
      validateOnMount: true,
    });
  return (
    <div className={backdrop}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={content}>
              <form className={formControl} onSubmit={handleSubmitForm}>
                <Typography
                  variant="h4"
                  component="h1"
                  style={{ paddingBottom: 30 }}
                >
                  Sign In
                </Typography>
                <div className={contentInput}>
                  <TextField
                    className={textInput}
                    label="Username"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: "gray", fontSize: 13 },
                    }}
                    inputProps={{ className: textInput }}
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.username && (
                    <p style={{ color: "red" }}>{errors.username}</p>
                  )}
                </div>
                <div className={contentInput}>
                  <TextField
                    type="password"
                    className={textInput}
                    label="Password"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: "gray", fontSize: 13 },
                    }}
                    inputProps={{ className: textInput }}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>
                <div className={contentInput}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{
                          color: "#f9ab00",
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" className={checkBox}>
                        Remember Me
                      </Typography>
                    }
                    labelPlacement="end"
                  />
                </div>
                <Button type="submit" className={btnLogin}>
                  Login
                </Button>
                <Typography variant="body2">
                  Don't have an account?
                  <Typography
                    variant="body"
                    className={textSignUp}
                    onClick={() =>
                      window.open("https://www.themoviedb.org/signup")
                    }
                  >
                    Sign Up
                  </Typography>
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  className={btnGoBack}
                  onClick={() => history.goBack()}
                >
                  Go Back
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
