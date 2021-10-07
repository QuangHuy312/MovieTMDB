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
import { Pagination } from "@material-ui/lab";
import clsx from "clsx";
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import NOT_ITEM from "../../../../assets/img_no_item.png";
import NOT_POSTER from "../../../../assets/img_no_poster.jpg";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const ItemsList = ({ arrList, page, handlePageChange, arrGenresList }) => {
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
  } = useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();

  return (
    <Fragment>
      {arrList?.results?.length !== 0 ? (
        <div className={content}>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              {arrList?.results?.slice(0, 18)?.map((movie) => {
                return (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
                    <Card className={card}>
                      <div className={contentCard}>
                        <CardMedia
                          image={
                            movie.poster_path
                              ? `${IMAGE_URL}${WIDTH_IMAGE}${movie.poster_path}`
                              : NOT_POSTER
                          }
                          className={media}
                        />
                        <Typography
                          variant="h2"
                          className={arrow}
                          onClick={() => {
                            if (history.location.pathname === "/movies/list") {
                              history.push(`/detailmovies/${movie.id}`);
                            } else if (
                              history.location.pathname === "/tvshow/list"
                            ) {
                              history.push(`/detailtvshow/${movie.id}`);
                            }
                          }}
                        >
                          <ArrowRightAltIcon />
                        </Typography>
                        <Typography variant="h1" className={rated}>
                          {movie.vote_average}
                        </Typography>
                      </div>
                      <CardContent className={textContent}>
                        <Typography
                          variant="body2"
                          className={title}
                          onClick={() => {
                            if (history.location.pathname === "/movies/list") {
                              history.push(`/detailmovies/${movie.id}`);
                            } else if (
                              history.location.pathname === "/tvshow/list"
                            ) {
                              history.push(`/detailtvshow/${movie.id}`);
                            }
                          }}
                        >
                          {movie.title || movie.name}
                          <Typography variant="span">
                            (
                            {movie?.release_date?.slice(0, 4) ||
                              movie?.first_air_date?.slice(0, 4)}
                            )
                          </Typography>
                        </Typography>
                        <div className={genre}>
                          {movie?.genre_ids?.map((genre) => {
                            return arrGenresList?.map((listGenre, index) => {
                              if (genre === listGenre.id) {
                                return (
                                  <Typography variant="body2" key={index}>
                                    {listGenre.name}
                                  </Typography>
                                );
                              }
                            });
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
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
        <div
          style={{
            padding: 40,
            textAlign: "center",
            borderTop: "1px solid #5a4c4c",
          }}
        >
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
        </div>
      )}
    </Fragment>
  );
};

export default ItemsList;
