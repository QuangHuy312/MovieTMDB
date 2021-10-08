import {
  Button,
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
import queryString from "query-string";
import React, { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router";
import useStyle from "./style";

const CatalogList = ({ genreId, setLoading }) => {
  const history = useHistory();
  const location = useLocation();
  const [country, setCountry] = React.useState("");
  const [rating, setRating] = React.useState([5, 10]);

  const rateGte = rating?.join("").slice(0, 1);
  const rateLte = rating?.join("").slice(1, 3);

  const [selectedFromDate, setSelectedFromDate] = useState("2017-05-29");

  const [selectedToDate, setSelectedToDate] = useState("2021-05-29");

  const handleFromDateChange = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");
    setSelectedFromDate(formatDate);
  };

  const handleToDateChange = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");
    setSelectedToDate(formatDate);
  };

  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleClickFilter = () => {
    setLoading(true);
    const filters = {
      genre: genreId,
      language: country.slice(-2) || "en",
      rategte: rateGte,
      ratelte: rateLte,
      releaseDateLte: selectedToDate,
      releaseDateGte: selectedFromDate,
    };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const {
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
    </Fragment>
  );
};

export default CatalogList;
