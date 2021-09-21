import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyle from "./style";
import BACKDROP from "../../assets/img_no_background.png";
import { useHistory } from "react-router";
import {
  deleteCreatedListAction,
  getCreatedListAction,
} from "../../redux/action/DashBoardManagerAction";
import { useSnackbar } from "notistack";
import { useConfirm } from "material-ui-confirm";

const ListDashBoard = ({ infoUser, sessionId }) => {
  const {
    content,
    title,
    contentCard,
    imgCard,
    textCard,
    btnCreateList,
    iconDelete,
  } = useStyle();
  const { arrCreatedList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const confirm = useConfirm();

  useEffect(() => {
    dispatch(getCreatedListAction(infoUser.id, sessionId));
  }, [dispatch]);

  const handleDeleteList = (listId) => {
    confirm({
      description: `By clicking OK, this list will be deleted .`,
    })
      .then(() =>
        dispatch(
          deleteCreatedListAction(
            listId,
            sessionId,
            (mes) => {
              enqueueSnackbar(mes, { variant: "success" });
            },
            infoUser.id
          )
        )
      )
      .catch(() => console.log("deletion canclled"));
  };
  return (
    <Container className={content}>
      <div className={title}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          My lists
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={btnCreateList}
          onClick={() => history.push(`/${infoUser.username}/list/new`)}
        >
          Create List
        </Button>
      </div>

      <Grid container spacing={3}>
        {arrCreatedList?.map((list) => {
          return (
            <Grid item xs={6} key={list.id}>
              <Card className={contentCard}>
                <CardMedia image={BACKDROP} className={imgCard} />
                <CardContent>
                  <div className={textCard}>
                    <Typography
                      variant="body"
                      style={{
                        cursor: "pointer",
                        fontSize: 30,
                      }}
                      onClick={() =>
                        history.push(`/${infoUser.username}/list/${list.id}`)
                      }
                    >
                      {list.name}
                    </Typography>

                    <Typography variant="h5">
                      {list.item_count} items
                    </Typography>
                  </div>
                  <div
                    className={iconDelete}
                    onClick={() => handleDeleteList(list.id)}
                  >
                    <Typography variant="h5">x</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListDashBoard;
