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
import List from "../List/List";
import useStyle from "./style";

const ContentListTvShow = () => {
  const [clickFilter, setClickFilter] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { arrTVShowList, arrGenresTVShowList, arrTVShowListFilterd } =
    useSelector((state) => state.MovieManagerReducer);

  useEffect(() => {
    if (page > 1) {
      handleClickFilter();
    }
    dispatch(getTVShowListAction(page));
    dispatch(getGenresTVShowListAction);
  }, [page, dispatch]);

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
    moment(newDate).format("DD/MM/YYYY")
  );
  const fisrtAirDateGte = moment(selectedFromDate).format("YYYY-MM-DD");
  const firstAirDateLte = moment(selectedToDate).format("YYYY-MM-DD");

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
  };

  const { formControl, select, btnFilter, input, contentDate } = useStyle();

  return (
    <Fragment>
      <Container style={{ padding: "40px 0px" }}>
        <Grid container style={{ padding: 25 }}>
          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              GENRE :
            </Typography>
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

          <Grid xs={12} sm={3} md={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              LANGUAGE :
            </Typography>
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

          <Grid xs={12} sm={4} md={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              RATING :
            </Typography>
            <Typography variant="body" style={{ fontSize: 12 }}>
              User Rating:
              <Typography
                variant="body"
                style={{ color: "#f9ab00", fontSize: 14, paddingLeft: 10 }}
              >
                {rating.slice(0, 1)}-{rating.slice(1, 2)}
              </Typography>
            </Typography>
            <div style={{ width: 150 }}>
              <Slider
                min={1}
                max={10}
                step={1}
                value={rating}
                onChange={handleChangeRating}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{ color: "#f9ab00" }}
              />
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={4} className={contentDate}>
            <div style={{ width: "40%" }}>
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
                style={{ width: 150, margin: 0 }}
              />
            </div>

            <div style={{ width: "45%" }}>
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
                style={{ width: 150, margin: 0 }}
              />
            </div>
          </Grid>

          <Grid xs={12} sm={6} md={2} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SubdirectoryArrowRightOutlinedIcon />}
              className={btnFilter}
              onClick={handleClickFilter}
            >
              APPLY FILTER
            </Button>
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

export default ContentListTvShow;
