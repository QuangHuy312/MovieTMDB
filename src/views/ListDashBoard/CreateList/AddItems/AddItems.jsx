import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Autocomplete } from "@material-ui/lab";
import { useTheme } from "@material-ui/styles";
import { useConfirm } from "material-ui-confirm";
import moment from "moment";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NO_ITEM from "../../../../assets/img_no_item.png";
import NO_POSTER from "../../../../assets/img_no_poster.jpg";
import StepCreate from "../../../../components/AdminComponent/StepCreate/StepCreate";
import { createAction } from "../../../../redux/action/createAction/createAction";
import {
  addMovieToListAction,
  deleteMovieFromListAction,
  getDetailsListAction,
  searchMovieAction,
} from "../../../../redux/action/DashBoardManagerAction";
import { DETELE_LIST_SEARCH } from "../../../../redux/types/DashBoardManagerType";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const AddItems = ({ infoUser, match, sessionId }) => {
  const {
    title,
    listName,
    content,
    form,
    contentRight,
    contentMovieSearch,
    titleMovieSearch,
    root,
    card,
    date,
    poster,
    titleItem,
    contentTitleAdded,
    posterNoItem,
    overview,
    circularRate,
    overviewMobile,
    titleMovieSearchMobile,
  } = useStyle();
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const history = useHistory();
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const id = match.params.id;
  const { arrListSearch, arrDetailsList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      if (valueSearch) {
        dispatch(searchMovieAction(valueSearch));
      } else {
        dispatch(createAction(DETELE_LIST_SEARCH));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [valueSearch, dispatch]);
  useEffect(() => {
    dispatch(getDetailsListAction(id));
  }, [dispatch, id]);

  const handleClickAddItem = (movieId) => {
    dispatch(
      addMovieToListAction(id, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  const handleClickRemoveItem = (type, movieId, name) => {
    confirm({
      description: `By clicking OK, item ${name} will be deleted from list.`,
    })
      .then(() =>
        dispatch(
          deleteMovieFromListAction(id, sessionId, type, movieId, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        )
      )
      .catch(() => console.log("deletion canclled"));
  };
  return (
    <Container maxWidth="xl" className={content}>
      <Grid container spacing={isMobile ? 1 : 3}>
        <Grid item xs={3}>
          <Typography
            variant="h3"
            onClick={() =>
              history.push({ pathname: `/${infoUser.username}/list/${id}` })
            }
            className={listName}
          >
            {arrDetailsList?.name}
          </Typography>
          <div className={title}>
            <Typography variant="h5">Edit</Typography>
          </div>

          <div>
            <StepCreate id={id} infoUser={infoUser} />
          </div>
        </Grid>

        <Grid xs={9} className={contentRight}>
          <div>
            <Typography variant="h6">Add Item</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                history.push({
                  pathname: `/${infoUser.username}/list/${id}/chooseimg`,
                })
              }
            >
              Choose Image
            </Button>
          </div>

          <Autocomplete
            id="combo-box-demo"
            options={arrListSearch?.length > 0 ? arrListSearch : []}
            getOptionLabel={(option) => option.title}
            className={form}
            inputValue={valueSearch}
            onInputChange={(e, value) => {
              setValueSearch(value);
            }}
            renderOption={(option) => (
              <Box
                onClick={() => handleClickAddItem(option.id)}
                className={root}
              >
                <Card className={card}>
                  {isMobile && (
                    <Typography
                      className={titleMovieSearchMobile}
                      variant="body2"
                      onClick={() => {
                        history.push({
                          pathname: `/detailmovies/${option.id}`,
                        });
                      }}
                    >
                      {option.title || option.name}
                    </Typography>
                  )}
                  <div className={contentMovieSearch}>
                    <CardMedia
                      image={
                        option.poster_path
                          ? `${IMAGE_URL}${WIDTH_IMAGE}${option.poster_path}`
                          : NO_POSTER
                      }
                      className={poster}
                    />
                    <CardContent>
                      <Box className={root}>
                        <div className={circularRate}>
                          <CircularProgressbar
                            value={option.vote_average * 10}
                            text={`${option.vote_average * 10}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              textSize: "30px",
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(0, 255, 0, ${
                                option.vote_average * 10
                              })`,
                              textColor: "black",
                              trailColor: "#204529",
                              backgroundColor: "#20c172",
                            })}
                          />
                        </div>
                        <div>
                          <Typography
                            className={titleMovieSearch}
                            variant="body2"
                            onClick={() => {
                              history.push({
                                pathname: `/detailmovies/${option.id}`,
                              });
                            }}
                          >
                            {option.title || option.name}
                          </Typography>
                          <Typography variant="body1" className={date}>
                            {moment(option.release_date).format("LL")}
                          </Typography>
                        </div>
                      </Box>
                      <div className={overview}>
                        <Typography variant="body2">
                          {option.overview.slice(0, 400)}
                        </Typography>
                      </div>
                    </CardContent>
                  </div>
                  {isDeskTop && (
                    <div>
                      <Typography variant="body2" className={overviewMobile}>
                        {option.overview.slice(0, 250)}
                      </Typography>
                    </div>
                  )}
                </Card>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for a movie ,tv show or people "
                variant="outlined"
              />
            )}
            autoComplete
            noOptionsText={
              <Box textAlign="center">
                <img src={NO_ITEM} alt="noitem" className={posterNoItem} />
              </Box>
            }
          />
          {arrDetailsList?.items?.length > 0 ? (
            <Fragment>
              {arrDetailsList?.items?.map((item, index) => {
                return (
                  <div key={item.id} className={contentTitleAdded}>
                    <div>
                      <Typography variant="span">{index + 1}.</Typography>
                      <Typography
                        variant="span"
                        className={titleItem}
                        onClick={() => {
                          if (item.media_type === "movie") {
                            history.push({
                              pathname: `/detailmovies/${item.id}`,
                            });
                          } else if (item.media_type === "tv") {
                            history.push({
                              pathname: `/detailTVshow/${item.id}`,
                            });
                          }
                        }}
                      >
                        {item.name || item.title}
                      </Typography>
                    </div>
                    <div>
                      <HighlightOffIcon
                        variant="contained"
                        color="secondary"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          handleClickRemoveItem(
                            item.media_type,
                            item.id,
                            item.name || item.title
                          )
                        }
                      >
                        Remove
                      </HighlightOffIcon>
                    </div>
                  </div>
                );
              })}
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    history.push({
                      pathname: `/${infoUser.username}/list/${id}`,
                    })
                  }
                >
                  DETAIL LIST
                </Button>
              </Box>
            </Fragment>
          ) : (
            <Box paddingTop="25px">There are no items added to this list.</Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddItems;
