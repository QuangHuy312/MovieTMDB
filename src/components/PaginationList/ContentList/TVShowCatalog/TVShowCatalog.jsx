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
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenresTVShowListAction,
  getTVShowListAction,
  getTVShowListFilteredAction,
} from "../../../../redux/action/MovieManagerAction";
import List from "../DetailList/DetailList";
import useStyle from "../MovieCatalog/style";

const TVShowCatalog = () => {
  const [clickFilter, setClickFilter] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { arrTVShowList, arrGenresTVShowList, arrTVShowListFilterd } =
    useSelector((state) => state.MovieManagerReducer);

  const [genre, setGenre] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [rating, setRating] = React.useState([5, 10]);

  const rateGte = rating?.join("").slice(0, 1);
  const rateLte = rating?.join("").slice(1, 3);

  //Api yêu cầu gửi tên viết tắt , vd Japanese =ja ....
  const language = country.slice(-2);

  // Api yêu cầu gửi mã id của genre , check với mảng Genres tìm ra id
  const findId = arrGenresTVShowList?.find((genreList) => {
    if (genreList.name === genre) {
      return genreList.id;
    }
  });
  const genreId = findId?.id;

  const newDate = new Date();
  const [selectedFromDate, setSelectedFromDate] =
    React.useState(" 12 / 09 / 2017");

  const handleFromDateChange = (date) => {
    setSelectedFromDate(date);
  };

  const [selectedToDate, setSelectedToDate] = React.useState(
    moment(newDate).format("MM/DD/YYYY")
  );
  const fisrtAirDateGte = moment(selectedFromDate).format("YYYY-MM-DD");
  const firstAirDateLte = moment(selectedToDate).format("YYYY-MM-DD");

  useEffect(() => {
    dispatch(getTVShowListAction(page));
    dispatch(getGenresTVShowListAction);
    if (clickFilter) {
      dispatch(
        getTVShowListFilteredAction(
          page,
          fisrtAirDateGte,
          firstAirDateLte,
          rateGte,
          rateLte,
          genreId,
          language
        )
      );
    }
  }, [
    page,
    dispatch,
    fisrtAirDateGte,
    firstAirDateLte,
    rateGte,
    rateLte,
    genreId,
    language,
    clickFilter,
  ]);
  const handleToDateChange = (date) => {
    setSelectedToDate(date);
  };

  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  };
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleClickFilter = () => {
    setClickFilter(true);
  };

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
                <MenuItem value="War & Politics">War & Politics</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Documentary">Documentary</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
                <MenuItem value="Family">Family</MenuItem>
                <MenuItem value="Talk">Talk</MenuItem>
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

      {clickFilter ? (
        <Fragment>
          <List
            arrList={arrTVShowListFilterd}
            setPage={setPage}
            arrGenresList={arrGenresTVShowList}
          />
        </Fragment>
      ) : (
        <Fragment>
          <List
            arrList={arrTVShowList}
            setPage={setPage}
            arrGenresList={arrGenresTVShowList}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default TVShowCatalog;
