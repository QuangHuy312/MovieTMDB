import {
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
import ContentNavList from "../ContentNavList/ContentNavList";
import useStyle from "./style";

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
          <Typography variant="h6">{arrDetailsList?.name}</Typography>
          <div className={title}>
            <Typography variant="h5">Edit</Typography>
          </div>

          <div>
            <ContentNavList id={id} infoUser={infoUser} />
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
                        </div>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Fragment>
            ) : (
              <Typography variant="body2" style={{ paddingTop: 25 }}>
                There are no items added to this list.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChooseImage;
