import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
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
import useStyle from "./style";

let schema = yup.object().shape({
  name: yup.string().required("Username is required"),
  desciption: yup.string(),
});

const CreateList = ({ infoUser, sessionId }) => {
  const { title, content, contentList, active, textList } = useStyle();

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitForm = (e) => {
    console.log(values);
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
    <Container className={content}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h4">Create New List</Typography>
          <div className={title}>
            <Typography variant="h5">NEW</Typography>
          </div>

          <div>
            <List className={contentList}>
              <ListItem className={active}>
                <Typography variant="body2" className={textList}>
                  Step 1 :List Details
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" className={textList}>
                  Step 2 :Add Items
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" className={textList}>
                  Step 3 :Choose Images
                </Typography>
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={9}>
          <form style={{ padding: "40px 15px" }} onSubmit={handleSubmitForm}>
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
              <Button
                type="submit"
                variant="contained"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#01b4e4",
                  color: "#fff",
                }}
              >
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
