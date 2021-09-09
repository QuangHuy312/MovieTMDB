import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyle from "./style";
import * as yup from "yup";
import { Form, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { UserManagerAction } from "../../redux/action/UserManagerAction";
import { REQUEST_TOKEN } from "../../utils/settings/config";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";

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
  } = useStyle();

  const handleSubmitForm = (e) => {
    const info = { ...values, request_token: REQUEST_TOKEN };
    e.preventDefault();
    if (!isValid) return;
    dispatch(
      UserManagerAction(
        info,
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
      initialValues: { username: "", password: "" },
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
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
