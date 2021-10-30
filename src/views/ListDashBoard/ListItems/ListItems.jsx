import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import clsx from "clsx";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getDetailsListAction } from "../../../redux/action/DashBoardManagerAction";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";
import NO_POSTER from "../../../assets/img_no_poster.jpg";

const ListItems = ({ match, infoUser }) => {
  const idList = match.params.id;
  const { arrDetailsList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsListAction(idList));
  }, [dispatch, idList]);

  const averageRating = arrDetailsList?.items?.reduce((total, item) => {
    return (total += item.vote_average);
  }, 0);

  const totalPopularity = arrDetailsList?.items
    ?.reduce((total, item) => {
      return (total += item.popularity);
    }, 0)
    .toFixed(2);

  const percentRating = Math.ceil(
    (averageRating * 10) / arrDetailsList?.items?.length
  );
  const {
    content,
    info,

    iconArrow,
    rated,
    title,
    media,
    card,

    contentCard,
  } = useStyle();
  const arrow = clsx(rated, iconArrow);
  return (
    <Container maxWidth="xl" className={content}>
      <div>
        <Grid container>
          <Grid item xs={4}>
            <div className={info}>
              <Typography variant="h4" component="i">
                {arrDetailsList.item_count}
              </Typography>
              <Typography variant="h6">ITEM IN THIS LIST</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className={info}>
              <Typography variant="h4" component="i">
                {percentRating || 0}%
              </Typography>
              <Typography variant="h6">AVERAGE RATING</Typography>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className={info}>
              <Typography variant="h4" component="i">
                {totalPopularity}
              </Typography>
              <Typography variant="h6">TOTAL POPULARITY</Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container spacing={3} style={{ paddingTop: 30 }}>
          {arrDetailsList?.items?.length > 0 ? (
            <Fragment>
              {arrDetailsList?.items?.map((items, index) => {
                return (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={items.id}>
                    <Card className={card}>
                      <div className={contentCard}>
                        <CardMedia
                          image={
                            items.poster_path
                              ? `${IMAGE_URL}${WIDTH_IMAGE}${items.poster_path}`
                              : NO_POSTER
                          }
                          className={media}
                        />
                        <Typography
                          variant="h2"
                          component="span"
                          className={arrow}
                          onClick={() => {
                            if (items.media_type === "movie") {
                              history.push(`/detailmovies/${items.id}`);
                            } else if (items.media_type === "tv") {
                              history.push(`/detailtvshow/${items.id}`);
                            }
                          }}
                        >
                          <ArrowRightAltIcon />
                        </Typography>
                        <Typography
                          variant="h1"
                          component="div"
                          className={rated}
                        >
                          {items.vote_average}
                        </Typography>
                      </div>
                      <CardContent>
                        <Typography
                          variant="body2"
                          className={title}
                          component="p"
                          onClick={() => {
                            if (items.media_type === "movie") {
                              history.push(`/detailmovies/${items.id}`);
                            } else if (items.media_type === "tv") {
                              history.push(`/detailtvshow/${items.id}`);
                            }
                          }}
                        >
                          {items?.title?.slice(0, 50) ||
                            items?.name?.slice(0, 50)}
                          {items?.title?.length > 50 || items?.name?.length > 50
                            ? "..."
                            : null}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Fragment>
          ) : (
            <div style={{ textAlign: "center", padding: "30px 0" }}>
              <Typography variant="body1">
                There are no movies in this list
              </Typography>
            </div>
          )}
        </Grid>
      </div>

      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 20, fontWeight: "bold" }}
          onClick={() =>
            history.push(`/${infoUser.username}/list/${idList}/edit`)
          }
        >
          ADD ITEM
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={{ fontWeight: "bold" }}
          onClick={() => history.push(`/${infoUser.username}/list/new`)}
        >
          CREATE NEW LIST
        </Button>
      </div>
    </Container>
  );
};

export default ListItems;
