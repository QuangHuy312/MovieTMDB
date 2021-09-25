import {
  Card,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NO_BACK_DROP from "../../../../assets/img_no_background.png";
import {
  getCreatedListAction,
  getDetailsListAction,
} from "../../../../redux/action/DashBoardManagerAction";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const ChooseImage = ({ infoUser, match, sessionId }) => {
  const id = match.params.id;
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { arrDetailsList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsListAction(id));
  }, [dispatch]);
  const backdropList = localStorage.getItem(id);

  const handleClickChooseImage = (backdrop) => {
    dispatch(
      getCreatedListAction(infoUser.id, sessionId, backdrop, id, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  const {
    content,
    title,
    contentList,
    activeTitle,
    textList,
    backdrop,
    contentCard,
    textCard,
    activeSelect,
  } = useStyle();
  const activeChooseImage = clsx(textCard, activeSelect);
  return (
    <Container className={content}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h6">{arrDetailsList?.name}</Typography>
          <div className={title}>
            <Typography variant="h5">Edit</Typography>
          </div>

          <div>
            <List className={contentList}>
              <ListItem>
                <Typography
                  variant="body2"
                  className={textList}
                  onClick={() =>
                    history.push({ pathname: `/${infoUser.username}/list/new` })
                  }
                >
                  Step 1 :Create New
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="body2"
                  className={textList}
                  onClick={() =>
                    history.push({
                      pathname: `/${infoUser.username}/list/${id}/edit`,
                    })
                  }
                >
                  Step 2 :Add/Edit Items
                </Typography>
              </ListItem>
              <ListItem className={activeTitle}>
                <Typography
                  variant="body2"
                  className={textList}
                  onClick={() =>
                    history.push({
                      pathname: `/${infoUser.username}/list/${id}/chooseimg`,
                    })
                  }
                >
                  Step 3 :Choose Images
                </Typography>
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {arrDetailsList.items?.map((item, index) => {
              return (
                <Fragment key={item.id}>
                  <Grid item xs={4}>
                    <Card className={contentCard}>
                      <div>
                        <Typography variant="body">{index + 1}. </Typography>
                        <Typography variant="body">
                          {item.name || item.title}
                        </Typography>
                      </div>

                      <CardMedia
                        image={
                          item.backdrop_path
                            ? `${IMAGE_URL}${WIDTH_IMAGE}${item.backdrop_path}`
                            : NO_BACK_DROP
                        }
                        className={backdrop}
                        onClick={() =>
                          handleClickChooseImage(item.backdrop_path)
                        }
                      >
                        {item.backdrop_path === backdropList ? (
                          <div className={activeChooseImage}>
                            <Typography
                              variant="body2"
                              style={{ paddingTop: 10 }}
                            >
                              SELECTED
                            </Typography>
                          </div>
                        ) : (
                          <div className={textCard}>
                            <Typography
                              variant="body2"
                              style={{ paddingTop: 10 }}
                            >
                              SELECT THIS IMAGE
                            </Typography>
                          </div>
                        )}
                      </CardMedia>
                    </Card>
                  </Grid>
                </Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseImage;
