import {
  Button,
  Container,
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
import { createNewListAction } from "../../../redux/action/DashBoardManagerAction";
import StepCreate from "./../../../components/AdminComponent/StepCreate/StepCreate";
import useStyle from "./style";

let schema = yup.object().shape({
  name: yup.string().required("Username is required"),
  desciption: yup.string(),
});

const CreateList = ({ infoUser, sessionId }) => {
  const { title, content, contentForm, btnSubmit } = useStyle();

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!isValid) return;

    dispatch(
      createNewListAction(
        sessionId,
        values,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        (list_id) => history.push(`/${infoUser.username}/list/${list_id}/edit`)
      )
    );
  };
  const { values, handleChange, isValid, errors, handleBlur, touched } =
    useFormik({
      initialValues: { name: "", description: "" },
      validationSchema: schema,
      validateOnMount: true,
    });
  return (
    <Container maxWidth="xl" className={content}>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h4">Create New List</Typography>
          <div className={title}>
            <Typography variant="h5">NEW</Typography>
          </div>

          <div>
            <StepCreate infoUser={infoUser} />
          </div>
        </Grid>
        <Grid item xs={9}>
          <form className={contentForm} onSubmit={handleSubmitForm}>
            <div>
              <TextField
                type="text"
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
              <TextField
                id="filled-multiline-flexible"
                label="Desciption"
                multiline
                rows={4}
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                style={{ width: "100%", margin: "20px 0px" }}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" className={btnSubmit}>
                Countinue
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateList;
