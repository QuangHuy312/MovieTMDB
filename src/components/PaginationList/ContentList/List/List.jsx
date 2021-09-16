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
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import NOT_ITEM from "../../../../assets/img_no_item.png";
import NOT_POSTER from "../../../../assets/img_no_poster.jpg";

const List = ({ arrList, setPage, arrGenresList }) => {
  const { content, media, card, title, rated, iconArrow, contentCard } =
    useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();
  return (
    <Fragment>
      {arrList?.results?.length !== 0 ? (
        <div className={content}>
          <Container>
            <Grid container>
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
                          component="span"
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
                        <Typography
                          variant="h1"
                          component="div"
                          className={rated}
                        >
                          {movie.vote_average}
                        </Typography>
                      </div>
                      <CardContent style={{ padding: 0, marginTop: 10 }}>
                        <Typography
                          variant="body2"
                          className={title}
                          component="p"
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
                          <Typography
                            variant="body"
                            style={{
                              marginLeft: 10,
                              color: "#f9ab00",
                            }}
                          >
                            (
                            {movie?.release_date?.slice(0, 4) ||
                              movie?.first_air_date?.slice(0, 4)}
                            )
                          </Typography>
                        </Typography>
                        <div
                          style={{
                            paddingTop: 10,
                            color: "#f9ab00",
                            display: "grid",
                            gridTemplateColumns: "1fr 1.7fr",
                          }}
                        >
                          {movie?.genre_ids?.map((genre) => {
                            return arrGenresList?.map((listGenre) => {
                              if (genre === listGenre.id) {
                                return (
                                  <span
                                    style={{
                                      fontSize: 12,
                                      paddingBottom: 5,
                                    }}
                                  >
                                    {listGenre.name}
                                  </span>
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
            </Grid>
          </Container>
          <div style={{ width: "30%", margin: "0 auto", paddingBottom: 20 }}>
            <Pagination
              count={arrList?.total_pages}
              variant="outlined"
              shape="rounded"
              color="primary"
              onChange={(e) => {
                setPage(e.target.textContent);
              }}
            />
          </div>
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

export default List;
