import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
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
import NO_POSTER from "../../../../assets/img_no_poster.jpg";
import NO_ITEM from "../../../../assets/img_no_item.png";
import { useSnackbar } from "notistack";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useConfirm } from "material-ui-confirm";
import { useHistory } from "react-router";

const AddItems = ({ infoUser, match, sessionId }) => {
  const {
    title,
    content,
    contentList,
    active,
    textList,
    infoItem,
    date,
    poster,
    contentItem,
    titleItem,
  } = useStyle();
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const history = useHistory();
  const id = match.params.id;
  const { arrCreatedList, arrListSearch, arrDetailsList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const currentList = arrCreatedList?.find((item) => item.id == id);
  const arrFilterListSearch = arrListSearch?.filter(
    (item) => item.media_type !== "person"
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
  }, []);

  const handleClickAddItem = (movieId) => {
    dispatch(
      addMovieToListAction(id, sessionId, movieId, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };
  const handleClickRemoveItem = (movieId, name) => {
    confirm({
      description: `By clicking OK, item ${name} will be deleted from list.`,
    })
      .then(() =>
        dispatch(
          deleteMovieFromListAction(id, sessionId, movieId, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        )
      )
      .catch(() => console.log("deletion canclled"));
  };
  console.log(history.location);
  return (
    <Container className={content}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="h4">{currentList?.name}</Typography>
          <div className={title}>
            <Typography variant="h5">Edit</Typography>
          </div>

          <div>
            <List className={contentList}>
              <ListItem>
                <Typography variant="body2" className={textList}>
                  Step 1 :List Details
                </Typography>
              </ListItem>
              <ListItem className={active}>
                <Typography variant="body2" className={textList}>
                  Step 2 :Add/Edit Items
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" className={textList}>
                  Step 3 :Choose Images
                </Typography>
              </ListItem>
            </List>
          </div>
        </Grid>

        <Grid xs={9} style={{ padding: "20px 40px" }}>
          <Typography variant="body2">Add Item</Typography>

          <Autocomplete
            id="combo-box-demo"
            options={arrFilterListSearch?.length > 0 ? arrFilterListSearch : []}
            getOptionLabel={(option) => option.title}
            style={{ width: "100%", marginTop: 40 }}
            inputValue={valueSearch}
            onInputChange={(e, value) => {
              setValueSearch(value);
            }}
            renderOption={(option) => (
              <div
                onClick={() => handleClickAddItem(option.id)}
                className={contentItem}
              >
                <div>
                  <img
                    src={`${IMAGE_URL}${WIDTH_IMAGE}${option.poster_path}`}
                    alt="poster"
                    className={poster}
                    onError={(e) => (e.target.src = NO_POSTER)}
                  />
                </div>
                <div className={infoItem}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        padding: "7px 10px 0",
                      }}
                    >
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
                      <Typography className={titleItem} variant="body2">
                        {option.title || option.name}
                      </Typography>
                      <Typography variant="body" className={date}>
                        {moment(
                          option.release_date || option.first_air_date
                        ).format("LL")}
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography variant="body2">
                      {option.overview.slice(0, 400)}
                    </Typography>
                  </div>
                </div>
              </div>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search for a movie ,tv show or people "
                variant="outlined"
              />
            )}
            noOptionsText={
              <div style={{ textAlign: "center" }}>
                <img src={NO_ITEM} alt="noitem" className={poster} />
              </div>
            }
          />
          {arrDetailsList?.items?.length > 0 && (
            <Fragment>
              {arrDetailsList?.items?.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    style={{
                      padding: "20px 0",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography variant="body" style={{ fontWeight: "bold" }}>
                        {index + 1}
                      </Typography>
                      <Typography
                        variant="body"
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
              <div style={{ textAlign: "center" }}>
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
              </div>
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddItems;
