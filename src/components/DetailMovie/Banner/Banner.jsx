import {
  Button,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import StarsIcon from "@material-ui/icons/Stars";
import { Rating } from "@material-ui/lab";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { useSnackbar } from "notistack";
import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NO_POSTER from "../../../assets/img_no_poster.jpg";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingMovieAction,
  deleteRatingTVAction,
  postRatingMovieAction,
  postRatingTVAction,
} from "../../../redux/action/DashBoardManagerAction";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../../utils/settings/config";
import useStyle from "./style";

const Banner = ({ detailBanner, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { infoUser, guestSessionId } = useSelector(
    (state) => state.UserManagerReducer
  );
  const accountId = infoUser.id;
  const [open, setOpen] = useState(false);
  const [valueRate, setValueRate] = useState("");
  const [iconAddClick, setIconAddClick] = useState(false);
  const [iconFavouriteClick, setIconFavouriteClick] = useState(false);
  const [iconRatingClick, setIconRatingClick] = useState(false);
  const sessionId = localStorage.getItem("sessionId");
  const { enqueueSnackbar } = useSnackbar();
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
    name,
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
    btnIcons,
    btnClickIcons,
  } = useStyle();
  const rating = Math.floor(vote_average / 2);
  const valueText = (value) => {
    setValueRate(value);
  };
  const handleAddToListIcon = () => {
    if (!sessionId) {
      history.push("/login");
    }
    setIconAddClick(!iconAddClick);
    if (!iconAddClick) {
      dispatch(
        addToWatchListAction(
          accountId,
          sessionId,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          true
        )
      );
    } else {
      dispatch(
        addToWatchListAction(
          accountId,
          sessionId,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false
        )
      );
    }
  };
  const handleRatingIcon = () => {
    if (!sessionId) {
      history.push("/login");
    }
    setIconRatingClick(!iconRatingClick);
    if (history.location.pathname === `/detailmovies/${id}`) {
      if (!iconRatingClick) {
        dispatch(
          postRatingMovieAction(
            id,
            sessionId,
            valueRate,
            guestSessionId,
            (mes) => {
              enqueueSnackbar(mes, { variant: "success" });
            }
          )
        );
      } else {
        dispatch(
          deleteRatingMovieAction(id, sessionId, guestSessionId, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        );
      }
    } else if (history.location.pathname === `/detailtvshow/${id}`) {
      if (!iconRatingClick) {
        dispatch(
          postRatingTVAction(
            id,
            sessionId,
            valueRate,
            guestSessionId,
            (mes) => {
              enqueueSnackbar(mes, { variant: "success" });
            }
          )
        );
      } else {
        dispatch(
          deleteRatingTVAction(id, sessionId, guestSessionId, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        );
      }
    }
  };
  const handleFavouriteIcon = () => {
    if (!sessionId) {
      history.push("/login");
    }
    setIconFavouriteClick(!iconFavouriteClick);
    if (!iconFavouriteClick) {
      dispatch(
        addToFavouriteAction(
          accountId,
          sessionId,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          true
        )
      );
    } else {
      dispatch(
        addToFavouriteAction(
          accountId,
          sessionId,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false
        )
      );
    }
  };
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
          blur={6} // default blur value is 10px
          borderRadius="none" // default border radius value is 10px
          style={{
            height: "700px",
            backgroundColor: "rgba(10, 10, 10, 0.44)",
          }}
        >
          <Container className={content}>
            <Grid container spacing={3}>
              <Grid item xs={3} sm={4}>
                <CardMedia
                  image={
                    poster_path
                      ? `${IMAGE_URL}${WIDTH_IMAGE}${poster_path}`
                      : NO_POSTER
                  }
                  className={poster}
                  alt="poster"
                />
              </Grid>
              <Grid item xs={9} sm={8}>
                <Typography variant="h2" className={titleMovie}>
                  <i> {title || name}</i>
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
                  <Typography variant="body" style={{ paddingLeft: 20 }}>
                    <Tooltip title="Add to watch list">
                      <PlaylistAddIcon
                        className={iconAddClick ? btnClickIcons : btnIcons}
                        onClick={handleAddToListIcon}
                      />
                    </Tooltip>
                    <Tooltip title="Mark as favourite">
                      <FavoriteBorderOutlinedIcon
                        className={
                          iconFavouriteClick ? btnClickIcons : btnIcons
                        }
                        onClick={handleFavouriteIcon}
                      />
                    </Tooltip>
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

                <div style={{ marginTop: 15, display: "flex" }}>
                  <Typography variant="body2">Your Rate</Typography>
                  <Slider
                    defaultValue={5}
                    min={1}
                    max={10}
                    step={0.5}
                    valueLabelDisplay="auto"
                    style={{ width: 150, marginLeft: 20, color: "#f9ab00" }}
                    getAriaValueText={valueText}
                  />
                  <Tooltip title="Send your rating">
                    <StarsIcon
                      onClick={handleRatingIcon}
                      className={iconRatingClick ? btnClickIcons : btnIcons}
                      fontSize="large"
                    />
                  </Tooltip>
                </div>
                <Typography variant="h6" className={desc}>
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
