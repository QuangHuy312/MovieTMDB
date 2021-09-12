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
  } = useStyle();
  return (
    <div className={container}>
      <div
        className={overlay}
        style={{
          backgroundImage: `url(${IMAGE_URL}${WIDTH_BACKDROP}${arrMoviePopular?.backdrop_path})`,
        }}
      ></div>
      <Container style={{ paddingTop: 40 }} className={content}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={4}>
            <img
              alt="poster"
              src={`${IMAGE_URL}${WIDTH_IMAGE}${arrMoviePopular?.poster_path}`}
              className={poster}
            />
          </Grid>
          <Grid item xs={9} sm={8}>
            <Typography variant="h2" className={titleMovie}>
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
                >
                  {genre.name}
                </Typography>
              ))}
            </div>
            <Typography variant="h4" className={titleRate}>
              Movie Of The Year <Rating name="simple-controlled" value={5} />
            </Typography>
            <Typography variant="h7" className={desc}>
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
