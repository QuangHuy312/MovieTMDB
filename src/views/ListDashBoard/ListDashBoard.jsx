import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import BACKDROP from "../../assets/img_no_background.png";
import {
  deleteCreatedListAction,
  getCreatedListAction,
} from "../../redux/action/DashBoardManagerAction";
import { IMAGE_URL, WIDTH_BACKDROP } from "../../utils/settings/config";
import useStyle from "./style";

const ListDashBoard = ({ infoUser, sessionId }) => {
  const {
    content,
    title,
    contentCard,
    imgCard,
    textCard,
    btnCreateList,
    iconDelete,
    contentText,
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
  }, []);

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
    <Container maxWidth="xl" className={content}>
      <div className={title}>
        <Typography variant="h4">My lists</Typography>
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
          const backdrop = localStorage.getItem(`${list.id}`);
          return (
            <Grid item xs={12} lg={6} key={list.id}>
              <Card className={contentCard}>
                <CardMedia
                  image={
                    backdrop
                      ? `${IMAGE_URL}${WIDTH_BACKDROP}${backdrop}`
                      : BACKDROP
                  }
                  className={imgCard}
                />
                <CardContent className={contentText}>
                  <div className={textCard}>
                    <Typography
                      variant="body2"
                      onClick={() =>
                        history.push(`/${infoUser.username}/list/${list.id}`)
                      }
                    >
                      {list.name}
                    </Typography>

                    <Typography variant="h5">
                      {list.item_count} items
                    </Typography>
                    <Typography variant="subtitle2">
                      Description:
                      <Typography variant="span">{list.description}</Typography>
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
