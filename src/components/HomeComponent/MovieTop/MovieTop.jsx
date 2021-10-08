import { Button, Container, Grid, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { useHistory } from "react-router";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../../utils/settings/config";
import useStyle from "./style";

const MovieTop = ({ arrMoviePopular }) => {
  const history = useHistory();
  const {
    content,
    titleMovie,
    overlay,
    age,
    releaseDate,
    genresMovie,
    container,
    buttonWatch,
    poster,
    desc,
    titleRate,
    buttonWatchMobile,
  } = useStyle({
    backgroundImage: `url(${IMAGE_URL}${WIDTH_BACKDROP}${arrMoviePopular?.backdrop_path})`,
  });
  return (
    <div className={container}>
      <div className={overlay}></div>
      <Container maxWidth="xl" className={content}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <img
              alt="poster"
              src={`${IMAGE_URL}${WIDTH_IMAGE}${arrMoviePopular?.poster_path}`}
              className={poster}
            />

            <Button
              startIcon={<PlayArrowIcon style={{ fontSize: 10 }} />}
              className={buttonWatchMobile}
              onClick={() =>
                history.push(`/detailmovies/${arrMoviePopular?.id}`)
              }
            >
              Watch Now
            </Button>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Typography variant="h3" className={titleMovie}>
              <i> {arrMoviePopular?.original_title}</i>
            </Typography>
            <Typography variant="body2">
              <Typography variant="span" className={age}>
                16+
              </Typography>
              <Typography variant="span" className={releaseDate}>
                <i> {arrMoviePopular?.release_date}</i>
              </Typography>
            </Typography>
            <div>
              {arrMoviePopular?.genres?.map((genre) => (
                <Typography
                  variant="span"
                  component="a"
                  className={genresMovie}
                  key={genre.id}
                >
                  {genre.name}
                </Typography>
              ))}
            </div>
            <Typography variant="h4" className={titleRate}>
              Movie Of The Year <Rating name="simple-controlled" value={5} />
            </Typography>
            <Typography variant="body2" className={desc}>
              {arrMoviePopular?.overview}
            </Typography>
            <div>
              <Button
                startIcon={<PlayArrowIcon />}
                className={buttonWatch}
                onClick={() =>
                  history.push(`/detailmovies/${arrMoviePopular?.id}`)
                }
              >
                Watch Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MovieTop;
