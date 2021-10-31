import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NO_BACK_DROP from "../../../../assets/img_no_background.png";
import {
  getCreatedListAction,
  getDetailsListAction,
} from "../../../../redux/action/DashBoardManagerAction";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import StepCreate from "../../../../components/AdminComponent/StepCreate/StepCreate";
import useStyle from "./style";
import { useHistory } from "react-router";

const ChooseImage = ({ infoUser, match, sessionId }) => {
  const id = match.params.id;
  const { enqueueSnackbar } = useSnackbar();
  const { arrDetailsList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsListAction(id));
  }, [dispatch, id]);
  const backdropList = localStorage.getItem(id);
  const history = useHistory();

  const handleClickChooseImage = (backdrop) => {
    dispatch(
      getCreatedListAction(infoUser.id, sessionId, backdrop, id, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  const {
    content,
    listName,
    title,
    titleMovie,
    backdrop,
    contentCard,
    textCard,
    activeSelect,
  } = useStyle();
  const activeChooseImage = clsx(textCard, activeSelect);
  return (
    <Container maxWidth="xl" className={content}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography
            variant="h3"
            className={listName}
            onClick={() =>
              history.push({
                pathname: `/${infoUser.username}/list/${id}`,
              })
            }
          >
            {arrDetailsList?.name}
          </Typography>
          <div className={title}>
            <Typography variant="h5">Edit</Typography>
          </div>

          <div>
            <StepCreate id={id} infoUser={infoUser} />
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {arrDetailsList.items?.length > 0 ? (
              <Fragment>
                {arrDetailsList.items?.map((item, index) => {
                  return (
                    <Fragment key={item.id}>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Typography variant="body2">
                          {index + 1}.
                          <Typography variant="span" className={titleMovie}>
                            {item.name || item.title}
                          </Typography>
                        </Typography>
                        <div>
                          <Card className={contentCard}>
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
                                  <Typography variant="body2">
                                    SELECTED
                                  </Typography>
                                </div>
                              ) : (
                                <div className={textCard}>
                                  <Typography variant="body2">
                                    SELECT THIS IMAGE
                                  </Typography>
                                </div>
                              )}
                            </CardMedia>
                          </Card>
                        </div>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Fragment>
            ) : (
              <Box paddingTop="25px">
                There are no items added to this list.
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseImage;
