import {
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";
import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenresMovieListAction,
  getMovieListAction,
  getMovieListFilteredAction,
} from "../../../../redux/action/MovieManagerAction";
import DetailList from "../DetailList/ItemsList";
import useStyle from "./style";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";

const MovieCatalog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useState(1);

  const { arrMovieList, arrGenresMovieList } = useSelector(
    (state) => state.MovieManagerReducer
  );
  useEffect(() => {
    dispatch(getMovieListAction(page));

    dispatch(getGenresMovieListAction);
  }, []);

  const [genre, setGenre] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [rating, setRating] = React.useState([5, 10]);

  const rateGte = rating?.join("").slice(0, 1);
  const rateLte = rating?.join("").slice(1, 3);

  const [selectedFromDate, setSelectedFromDate] = useState("2017-05-29");

  const [selectedToDate, setSelectedToDate] = useState("2021-05-29");

  const queryparams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
      releaseDateGte: params.releaseDateGte || selectedFromDate,
      releaseDateLte: params.releaseDateLte || selectedToDate,
      rategte: params.rateGte || 5, //default 5-10
      ratelte: params.rateLte || 10,
      genre: Number.parseInt(params.genre) || 28, // mặc định Action là 28
      language: params.language || "en",
    };
  }, [location.search]);

  const handleFromDateChange = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");
    setSelectedFromDate(formatDate);
    const filters = { ...queryparams, releaseDateGte: formatDate };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleToDateChange = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");
    setSelectedToDate(formatDate);
    const filters = { ...queryparams, releaseDateLte: formatDate };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
    const filters = { ...queryparams, rategte: rateGte, ratelte: rateLte };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    const filters = {
      ...queryparams,
      genre: arrGenresMovieList?.find((genreList) => {
        if (genreList.name === event.target.value) {
          return genreList;
        }
      })?.id,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    const filters = { ...queryparams, language: event.target.value.slice(-2) };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleClickFilter = useCallback(() => {
    if (queryparams) {
      dispatch(getMovieListFilteredAction(queryparams));
      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(queryparams),
      });
    }
  }, [queryparams]);

  useEffect(() => {
    handleClickFilter();
  }, [queryparams]);
  console.log(queryparams);
  const {
    content,
    formControl,
    slider,
    select,
    contentRating,
    userRating,
    datePicker,
    btnFilter,
    input,
    contentDate,
  } = useStyle();

  return (
    <Fragment>
      <Container maxWidth="xl" className={content}>
        <Grid container>
          <Grid item xs={6} sm={4} lg={2}>
            <Typography variant="body2">GENRE :</Typography>
            <FormControl className={formControl}>
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                onChange={handleChangeGenre}
                className={select}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Action</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Adventure">Adventure</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={6} sm={4} lg={2}>
            <Typography variant="body2">LANGUAGE :</Typography>
            <FormControl className={formControl}>
              <Select
                displayEmpty
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={country}
                onChange={handleChangeCountry}
                className={select}
                input={<Input className={input} />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>English</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="EngLish-en">English</MenuItem>
                <MenuItem value="Korean-ko">Korean</MenuItem>
                <MenuItem value="Japanese-ja">Japanese</MenuItem>
                <MenuItem value="Vietnamese-vi">Vietnamese</MenuItem>
                <MenuItem value="ThaiLan-th">Thai</MenuItem>
                <MenuItem value="Germany-de">German</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} sm={4} lg={2}>
            <div className={contentRating}>
              <div>
                <Typography variant="body2">RATING :</Typography>
                <Typography variant="span">
                  User Rating:
                  <Typography variant="span" className={userRating}>
                    {rating.slice(0, 1)}-{rating.slice(1, 2)}
                  </Typography>
                </Typography>
              </div>

              <Slider
                min={1}
                max={10}
                step={1}
                value={rating}
                onChange={handleChangeRating}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                className={slider}
              />
            </div>
          </Grid>
          <Grid xs={6} md={4} lg={2}>
            <div className={contentDate}>
              <Typography variant="body2">From</Typography>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedFromDate}
                onChange={handleFromDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={datePicker}
              />
            </div>
          </Grid>

          <Grid xs={6} md={4} lg={2}>
            <div className={contentDate}>
              <Typography variant="body2">To</Typography>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                value={selectedToDate}
                onChange={handleToDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={datePicker}
              />
            </div>
          </Grid>
          <Grid xs={12} md={4} lg={2}>
            <div className={btnFilter}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SubdirectoryArrowRightOutlinedIcon />}
                onClick={handleClickFilter}
              >
                APPLY FILTER
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>

      <DetailList
        arrList={arrMovieList}
        setPage={setPage}
        arrGenresList={arrGenresMovieList}
      />
      {/* {clickFilter ? (
        <Fragment>
          <DetailList
            arrList={arrMovieListFilterd}
            setPage={setPage}
            arrGenresList={arrGenresMovieList}
          />
        </Fragment>
      ) : (
        <Fragment>
          <DetailList
            arrList={arrMovieList}
            setPage={setPage}
            arrGenresList={arrGenresMovieList}
          />
        </Fragment>
      )} */}
    </Fragment>
  );
};

export default MovieCatalog;
