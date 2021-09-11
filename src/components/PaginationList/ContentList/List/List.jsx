import {
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
import React from "react";
import { useHistory } from "react-router";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const List = ({ arrMovieList, setPage, arrGenresMovieList }) => {
  const { content, media, card, title, rated, iconArrow, contentCard } =
    useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();
  return (
    <div className={content}>
      <Container>
        <Grid container>
          {arrMovieList?.results?.slice(0, 18)?.map((movie) => {
            return (
              <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
                <Card className={card}>
                  <div className={contentCard}>
                    <CardMedia
                      image={`${IMAGE_URL}${WIDTH_IMAGE}${movie.poster_path}`}
                      className={media}
                    />
                    <Typography
                      variant="h2"
                      component="span"
                      className={arrow}
                      onClick={() => history.push(`/detailmovies/${movie.id}`)}
                    >
                      <ArrowRightAltIcon />
                    </Typography>
                    <Typography variant="h1" component="div" className={rated}>
                      {movie.vote_average}
                    </Typography>
                  </div>
                  <CardContent style={{ padding: 0, marginTop: 10 }}>
                    <Typography
                      variant="body2"
                      className={title}
                      component="p"
                      onClick={() => history.push(`/detailmovies/${movie.id}`)}
                    >
                      {movie.title}
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
                        return arrGenresMovieList?.map((listGenre) => {
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
          count={arrMovieList?.total_pages}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={(e) => {
            setPage(e.target.textContent);
            history.push({
              pathname: `/movies/list/page/${e.target.textContent}`,
            });
          }}
        />
      </div>
    </div>
  );
};

export default List;
