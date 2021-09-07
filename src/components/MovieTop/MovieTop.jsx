import {
  Button,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import useStyle from "./style";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../utils/settings/config";
import ReactPlayer from "react-player";
import Rating from "@material-ui/lab/Rating";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const MovieTop = ({ detailMovie }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const {
    title,
    videos,
    poster_path,
    runtime,
    release_date,
    genres,
    overview,
    backdrop_path,
  } = detailMovie;

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
    trailer,
  } = useStyle();
  return (
    <div className={container}>
      <div
        className={overlay}
        style={{
          backgroundImage: `url(${IMAGE_URL}${WIDTH_BACKDROP}${backdrop_path})`,
        }}
      ></div>
      <Container style={{ paddingTop: 40 }} className={content}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={4}>
            <img
              src={`${IMAGE_URL}${WIDTH_IMAGE}${poster_path}`}
              className={poster}
            />
          </Grid>
          <Grid item xs={9} sm={8}>
            <Typography variant="h2" className={titleMovie}>
              <i> {title}</i>
            </Typography>
            <Typography variant="body2">
              <Typography variant="span" className={age}>
                16+
              </Typography>
              {Math.floor(runtime / 60)}hr {runtime % 60}mins
              <Typography variant="span" className={releaseDate}>
                <i> {release_date}</i>
              </Typography>
            </Typography>
            <div>
              {genres?.map((genre) => (
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
              {overview}
            </Typography>
            <div>
              <Button
                startIcon={<PlayArrowIcon />}
                className={buttonWatch}
                onClick={() => setOpen(true)}
              >
                Watch Now
              </Button>
            </div>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={trailer}>
            <ReactPlayer
              playing={true}
              controls={true}
              width="100%"
              height="550px"
              url={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
            />
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default MovieTop;

// <ReactPlayer
// playing={true}
// controls={true}
// width="100%"
// height="450px"
// url={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
// />
