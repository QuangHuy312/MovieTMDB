import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Pagination, Skeleton } from "@material-ui/lab";
import clsx from "clsx";
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import NOT_ITEM from "../../../../assets/img_no_item.png";
import NOT_POSTER from "../../../../assets/img_no_poster.jpg";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const ItemsList = ({
  arrList,
  page,
  handlePageChange,
  arrGenresList,
  loading,
}) => {
  const {
    content,
    media,
    card,
    textContent,
    title,
    rated,
    iconArrow,
    contentCard,
    genre,
    pagination,

    bgSkeleton,
  } = useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();
  return (
    <Fragment>
      {arrList?.results?.length !== 0 ? (
        <div className={content}>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              {(loading
                ? Array.from(new Array(18))
                : arrList?.results?.slice(0, 18)
              )?.map((movie) => {
                return (
                  <Fragment>
                    {movie ? (
                      <Grid item xs={6} sm={4} md={3} lg={2} key={movie?.id}>
                        <Card className={card}>
                          <div className={contentCard}>
                            <CardMedia
                              image={
                                movie?.poster_path
                                  ? `${IMAGE_URL}${WIDTH_IMAGE}${movie?.poster_path}`
                                  : NOT_POSTER
                              }
                              className={media}
                            />

                            <Typography
                              variant="h2"
                              className={arrow}
                              onClick={() => {
                                if (
                                  history.location.pathname === "/movies/list"
                                ) {
                                  history.push(`/detailmovies/${movie?.id}`);
                                } else if (
                                  history.location.pathname === "/tvshow/list"
                                ) {
                                  history.push(`/detailtvshow/${movie?.id}`);
                                }
                              }}
                            >
                              <ArrowRightAltIcon />
                            </Typography>

                            <Typography variant="h1" className={rated}>
                              {movie?.vote_average}
                            </Typography>
                          </div>

                          <CardContent className={textContent}>
                            <Typography
                              variant="body2"
                              className={title}
                              onClick={() => {
                                if (
                                  history.location.pathname === "/movies/list"
                                ) {
                                  history.push(`/detailmovies/${movie?.id}`);
                                } else if (
                                  history.location.pathname === "/tvshow/list"
                                ) {
                                  history.push(`/detailtvshow/${movie?.id}`);
                                }
                              }}
                            >
                              {movie?.title?.slice(0, 50) ||
                                movie?.name?.slice(0, 50)}
                              {movie?.title?.length > 50 ||
                              movie?.name?.length > 50
                                ? "..."
                                : null}
                              <Typography variant="span">
                                (
                                {movie?.release_date?.slice(0, 4) ||
                                  movie?.first_air_date?.slice(0, 4)}
                                )
                              </Typography>
                            </Typography>
                            <div className={genre}>
                              {movie?.genre_ids?.slice(0, 4)?.map((genre) => {
                                return arrGenresList?.map(
                                  (listGenre, index) => {
                                    if (genre === listGenre.id) {
                                      return (
                                        <Typography variant="body2" key={index}>
                                          {listGenre.name}
                                        </Typography>
                                      );
                                    }
                                  }
                                );
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    ) : (
                      <Grid item xs={6} sm={4} md={3} lg={2} key={movie?.id}>
                        <Skeleton
                          height={200}
                          variant="rect"
                          className={bgSkeleton}
                        />
                        <Skeleton className={bgSkeleton} />
                        <Skeleton width="60%" className={bgSkeleton} />
                      </Grid>
                    )}
                  </Fragment>
                );
              })}

              <Grid item xs={12}>
                <div className={pagination}>
                  <Pagination
                    count={arrList?.total_pages}
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    onChange={handlePageChange}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <Box padding="40px" textAlign="center" borderTop="1px solid #5a4c4c">
          <img src={NOT_ITEM} alt="noItem" width="400px" height="300px" />
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </div>
        </Box>
      )}
    </Fragment>
  );
};

export default ItemsList;
