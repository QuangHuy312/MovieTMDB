import {
  Box,
  Button,
  CardMedia,
  Container,
  Fab,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import { RemoveCircleOutline } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import StarIcons from "@material-ui/icons/Star";
import { Rating } from "@material-ui/lab";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import React, { Fragment, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Scrollbars } from "react-custom-scrollbars";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import NO_POSTER from "../../../assets/img_no_poster.jpg";
import {
  addToFavouriteAction,
  addToWatchListAction,
  deleteRatingMovieAction,
  deleteRatingTVAction,
  postRatingMovieAction,
  postRatingTVAction,
} from "../../../redux/action/UserManagerAction";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../../utils/settings/config";
import useStyle from "./style";

const Banner = ({ detailBanner, movieId, media_type, detailCredit }) => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const { infoUser, guestSessionId } = useSelector(
    (state) => state.UserManagerReducer
  );

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openPopup = Boolean(anchorEl);
  const sessionId = localStorage.getItem("sessionId");
  const { enqueueSnackbar } = useSnackbar();
  const handleShowPopupRating = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopupRating = () => {
    setAnchorEl(null);
  };
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
    tagline,
    episode_run_time,
    name,
    id,
    rating,
    favorite,
    watchlist,
    first_air_date,
  } = detailBanner;

  const {
    backdrop,
    content,
    titleMovie,
    titleData,
    textUserScore,
    age,
    circularRating,
    releaseDate,
    buttonWatch,
    bgIcons,
    poster,
    desc,
    trailer,
    contentIcons,
    btnIcons,
    btnActiveIconsFavorite,
    btnActiveIconsRating,
    btnActiveIconsAddList,
    iconPlay,
    contentRating,
    scrollBars,
    contentVideo,
  } = useStyle({
    backgroundImage: `url(${IMAGE_URL}${WIDTH_BACKDROP}${backdrop_path})`,
  });
  const bgActiveFavorite = clsx(btnIcons, btnActiveIconsFavorite);
  const bgActiveRating = clsx(btnIcons, btnActiveIconsRating);
  const bgActiveAddList = clsx(btnIcons, btnActiveIconsAddList);

  const handleAddToWatchList = () => {
    if (!sessionId) {
      history.push("/login");
    }

    if (!watchlist) {
      dispatch(
        addToWatchListAction(
          infoUser.id,
          sessionId,
          media_type,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          true,
          pathname
        )
      );
    } else {
      dispatch(
        addToWatchListAction(
          infoUser.id,
          sessionId,
          media_type,
          id,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false,
          pathname
        )
      );
    }
  };
  const handleClearRating = () => {
    setAnchorEl(null);
    if (pathname === `/detailmovies/${movieId}`) {
      dispatch(
        deleteRatingMovieAction(
          movieId,
          sessionId,
          guestSessionId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser,
          pathname
        )
      );
    } else if (pathname === `/detailtvshow/${movieId}`) {
      dispatch(
        deleteRatingTVAction(
          id,
          sessionId,
          guestSessionId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser,
          pathname
        )
      );
    }
  };
  const handleClickRating = (valRating) => {
    setAnchorEl(null);
    if (!sessionId) {
      history.push("/login");
    }

    if (pathname === `/detailmovies/${movieId}`) {
      dispatch(
        postRatingMovieAction(
          movieId,
          sessionId,
          valRating,
          guestSessionId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser,
          pathname
        )
      );
    } else if (pathname === `/detailtvshow/${movieId}`) {
      dispatch(
        postRatingTVAction(
          movieId,
          sessionId,
          valRating,
          guestSessionId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          infoUser,
          pathname
        )
      );
    }
  };
  const handleClickFavorite = () => {
    if (!sessionId) {
      history.push("/login");
    }

    if (!favorite) {
      dispatch(
        addToFavouriteAction(
          infoUser,
          sessionId,
          media_type,
          movieId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          true,
          pathname
        )
      );
    } else {
      dispatch(
        addToFavouriteAction(
          infoUser,
          sessionId,
          media_type,
          movieId,
          (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          },
          false,
          pathname
        )
      );
    }
  };

  return (
    <Fragment>
      <Box className={backdrop}>
        <CustomCard
          effectColor="#000" // required
          blur={6} // default blur value is 10px
          borderRadius="none" // default border radius value is 10px
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.7)",
          }}
        >
          <Container maxWidth="xxl" style={{ position: "relative" }}>
            <Box className={content}>
              <Typography variant="h4" className={titleMovie}>
                <i> {title || name}</i>
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6} md={4} xl={2}>
                  <CardMedia
                    image={
                      poster_path
                        ? `${IMAGE_URL}${WIDTH_IMAGE}${poster_path}`
                        : NO_POSTER
                    }
                    className={poster}
                    alt="poster"
                  />
                  <Box>
                    <Button
                      startIcon={<PlayArrowIcon />}
                      className={buttonWatch}
                      onClick={() => setOpen(true)}
                    >
                      Watch Trailer
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8} xl={4}>
                  <Typography variant="body2">
                    <Typography variant="span" className={age}>
                      16+
                    </Typography>
                    {runtime
                      ? `${Math.floor(runtime / 60)}hr ${runtime % 60}mins`
                      : ` ${episode_run_time?.[0] % 60}mins`}
                    <Typography variant="span" className={releaseDate}>
                      <i> {release_date || first_air_date}</i>
                    </Typography>
                  </Typography>
                  <Box>
                    <Typography variant="body1" style={{ marginTop: 10 }}>
                      Cast:
                      {detailCredit?.cast
                        ?.slice(0, 4)
                        ?.map((cast, index, arr) => (
                          <Fragment key={index}>
                            {index !== arr.length - 1 ? (
                              <Typography variant="span" className={titleData}>
                                {cast.name + ","}
                              </Typography>
                            ) : (
                              <Typography variant="span" className={titleData}>
                                {cast.name + ""}
                              </Typography>
                            )}
                          </Fragment>
                        ))}
                    </Typography>
                  </Box>
                  <Box style={{ paddingTop: "10px 0" }}>
                    <Typography variant="body2">
                      Genre:
                      {genres?.map((genre, index, arr) => (
                        <Fragment key={index}>
                          {index !== arr.length - 1 ? (
                            <Typography
                              variant="body2"
                              component="a"
                              className={titleData}
                            >
                              {genre.name + ","}
                            </Typography>
                          ) : (
                            <Typography
                              variant="body2"
                              component="a"
                              className={titleData}
                            >
                              {genre.name}
                            </Typography>
                          )}
                        </Fragment>
                      ))}
                    </Typography>
                  </Box>
                  <Grid item container spacing={2}>
                    <Grid item xs={4}>
                      <Box className={circularRating}>
                        <Box>
                          <CircularProgressbar
                            value={vote_average * 10}
                            text={`${vote_average * 10}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              textSize: "30px",
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(0, 255, 0, ${
                                vote_average * 10
                              })`,
                              textColor: "#fff",
                              trailColor: "#669e79",
                              backgroundColor: "#20c172",
                            })}
                          />
                        </Box>
                        <Box>
                          <Typography className={textUserScore}>
                            User score
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={6} md={4}>
                      <Box className={contentIcons}>
                        <Box>
                          <Tooltip
                            title={
                              watchlist
                                ? "Delete to watch list"
                                : "Add to watch list"
                            }
                          >
                            <Fab
                              size="small"
                              className={bgIcons}
                              onClick={handleAddToWatchList}
                            >
                              <PlaylistAddIcon
                                className={
                                  watchlist ? bgActiveAddList : btnIcons
                                }
                              />
                            </Fab>
                          </Tooltip>
                        </Box>

                        <Box>
                          <Tooltip
                            title={
                              favorite
                                ? "Delete to favourite"
                                : "Add to favourite"
                            }
                          >
                            <Fab
                              size="small"
                              className={bgIcons}
                              onClick={handleClickFavorite}
                            >
                              <FavoriteIcon
                                className={
                                  favorite ? bgActiveFavorite : btnIcons
                                }
                              />
                            </Fab>
                          </Tooltip>
                        </Box>

                        <Box>
                          <Tooltip
                            title={
                              rating ? "Delete your rating" : "Send your rating"
                            }
                          >
                            <Fab size="small" className={bgIcons}>
                              <StarIcons
                                className={rating ? bgActiveRating : btnIcons}
                                fontSize="large"
                                onClick={handleShowPopupRating}
                              />
                            </Fab>
                          </Tooltip>

                          <Popover
                            open={openPopup}
                            anchorEl={anchorEl}
                            onClose={handleClosePopupRating}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                            style={{ marginTop: 20 }}
                          >
                            <Box className={contentRating}>
                              <Tooltip title="Clear">
                                <RemoveCircleOutline
                                  size="small"
                                  onClick={handleClearRating}
                                />
                              </Tooltip>
                              <Typography variant="body2" component="span">
                                <Rating
                                  name="simple-controlled"
                                  value={rating / 2}
                                  precision={0.5}
                                  onChange={(event, newValue) => {
                                    handleClickRating(newValue * 2);
                                  }}
                                />
                              </Typography>
                            </Box>
                          </Popover>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>

                  <Typography
                    variannt="body2"
                    component="i"
                    style={{ color: "#999" }}
                  >
                    {tagline}
                  </Typography>

                  <Box
                    style={{
                      padding: "30px 0",
                      backgroundColor: "rgb(35 35 31 / 40%)",
                      width: "100%",
                      borderRadius: 10,
                      marginTop: 20,
                    }}
                  >
                    <Scrollbars
                      style={{ width: "80%", height: 100, margin: "0 auto" }}
                      renderThumbVertical={({ style, ...props }) => (
                        <Box {...props} className={scrollBars} />
                      )}
                    >
                      <Typography variant="h6" className={desc}>
                        {overview}
                      </Typography>
                    </Scrollbars>
                  </Box>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
                    controls
                    playing
                    playIcon={<PlayArrowIcon className={iconPlay} />}
                    className={contentVideo}
                    light
                  />
                </Grid>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <Box className={trailer}>
                    <ReactPlayer
                      playing
                      controls
                      width="100%"
                      height="100%"
                      url={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
                    />
                  </Box>
                </Modal>
              </Grid>
            </Box>
          </Container>
        </CustomCard>
      </Box>
    </Fragment>
  );
};

export default Banner;
