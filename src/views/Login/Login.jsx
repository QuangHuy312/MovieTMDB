import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import useStyle from "./style";
import LockIcon from "@material-ui/icons/Lock";

const Login = () => {
  const { backdrop, content, textInput, formControl, contentInput, checkBox } =
    useStyle();
  return (
    <div className={backdrop}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={content}>
              <FormControl className={formControl}>
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
                    label="username"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
                </div>
                <div className={contentInput}>
                  <TextField
                    className={textInput}
                    label="password"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                  />
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
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
