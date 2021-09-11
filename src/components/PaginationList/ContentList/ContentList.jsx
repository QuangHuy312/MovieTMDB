import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React, { Fragment } from "react";
import useStyle from "./style";
import Slider from "@material-ui/core/Slider";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import List from "./List/List";

const ContentList = ({ page, arrMovieList, arrGenresMovieList }) => {
  const [genre, setGenre] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [rating, setRating] = React.useState([5, 10]);
  const [year, setYear] = React.useState([2017, 2021]);
  const handleChangeYear = (event, newValue) => {
    setYear(newValue);
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
  // console.log(rating.join(","));
  const { formControl, select, btnFilter } = useStyle();

  return (
    <Fragment>
      <Container style={{ padding: "40px 0px" }}>
        <Grid container style={{ paddingBottom: 15 }}>
          <Grid item xs={2}>
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
                <MenuItem value="Adventure">Adventure</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              LANGUAGE :
            </Typography>
            <FormControl className={formControl}>
              <Select
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                onChange={handleChangeCountry}
                className={select}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>English</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="Action">English</MenuItem>
                <MenuItem value="Korean">Korean</MenuItem>
                <MenuItem value="Japanese">Japanese</MenuItem>
                <MenuItem value="Vietnamese">Vietnamese</MenuItem>
                <MenuItem value="Mystery">Thai</MenuItem>
                <MenuItem value="Thriller">German</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              RATING :
            </Typography>
            <Typography variant="body" style={{ fontSize: 12 }}>
              Your Rate:
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
                step={0.5}
                value={rating}
                onChange={handleChangeRating}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{ color: "#f9ab00" }}
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" style={{ fontSize: 10 }}>
              YEAR :
            </Typography>
            <Typography variant="body" style={{ fontSize: 12 }}>
              Find by year:
              <Typography
                variant="body"
                style={{ color: "#f9ab00", fontSize: 14, paddingLeft: 10 }}
              >
                {year.slice(0, 1)}-{year.slice(1, 2)}
              </Typography>
            </Typography>
            <div style={{ width: 150 }}>
              <Slider
                min={2000}
                max={2021}
                step={1}
                value={year}
                onChange={handleChangeYear}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{ color: "#f9ab00" }}
              />
            </div>
          </Grid>

          <Grid xs={4} style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SubdirectoryArrowRightOutlinedIcon />}
              className={btnFilter}
            >
              APPLY FILTER
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Fragment>
        <List
          arrMovieList={arrMovieList}
          pageDefault={page}
          arrGenresMovieList={arrGenresMovieList}
        />
      </Fragment>
    </Fragment>
  );
};

export default ContentList;
