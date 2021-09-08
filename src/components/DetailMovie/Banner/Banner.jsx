import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../../redux/action/MovieManagerAction";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../../utils/settings/config";
import useStyle from "./style";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import { Button, Container, Grid, Modal, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Rating } from "@material-ui/lab";
import ReactPlayer from "react-player";

const Banner = ({ detailBanner }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const {
    backdrop_path,
    poster_path,
    title,
    videos,
    runtime,
    release_date,
    genres,
    overview,
    vote_average,
    vote_count,
    episode_run_time,
  } = detailBanner;

  const {
    backdrop,
    content,
    titleMovie,
    age,
    releaseDate,
    genresMovie,
    buttonWatch,
    poster,
    desc,
    trailer,
    voteCount,
  } = useStyle();
  const rating = Math.floor(vote_average / 2);
  return (
    <Fragment>
      <div
        className={backdrop}
        style={{
          backgroundImage: `url(${IMAGE_URL}${WIDTH_BACKDROP}${backdrop_path})`,
        }}
      >
        <CustomCard
          effectColor="#C780FF" // required
          blur={15} // default blur value is 10px
          borderRadius="none" // default border radius value is 10px
          style={{ height: "700px" }}
        >
          <Container className={content}>
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
                  {runtime
                    ? `${Math.floor(runtime / 60)}hr ${runtime % 60}mins`
                    : ` ${episode_run_time?.[0] % 60}mins`}
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
                <Typography variant="body2" component="div">
                  <Typography variant="body2" component="span">
                    <Rating name="simple-controlled" value={rating} />
                  </Typography>

                  <Typography
                    variant="body2"
                    component="span"
                    className={voteCount}
                  >
                    {vote_count} vote
                  </Typography>
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
            </Grid>
          </Container>
        </CustomCard>
      </div>
    </Fragment>
  );
};

export default Banner;
