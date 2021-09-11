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
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenresMovieListAction,
  getMovieListAction,
  getMovieListFilteredAction,
} from "../../../redux/action/MovieManagerAction";
import List from "./List/List";
import useStyle from "./style";

const ContentList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  console.log(page);
  const { arrMovieList, arrGenresMovieList, arrMovieListFilterd } = useSelector(
    (state) => state.MovieManagerReducer
  );

  useEffect(() => {
    if (page > 1) {
      handleClickFilter();
    }
    dispatch(getMovieListAction(page));
    dispatch(getGenresMovieListAction);
  }, [page, dispatch]);

  const [genre, setGenre] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [rating, setRating] = React.useState([5, 10]);
  const [year, setYear] = React.useState([2017]);

  const rateGte = rating.join("").slice(0, 1);
  const rateLte = rating.join("").slice(1, 3);

  //Api yêu cầu gửi tên viết tắt , vd Japanese =ja ....
  const language = country.slice(-2);

  // Api yêu cầu gửi mã id của genre , check với mảng Genres tìm ra id
  const findId = arrGenresMovieList?.find((genreList) => {
    if (genreList.name === genre) {
      return genreList.id;
    }
  });
  const genreId = findId?.id;
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
  const handleClickFilter = () => {
    dispatch(
      getMovieListFilteredAction(
        page,
        year,
        rateGte,
        rateLte,
        genreId,
        language
      )
    );
  };

  const { formControl, select, btnFilter, input } = useStyle();

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
                step={1}
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
                {year.slice(0, 1)}
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
              onClick={handleClickFilter}
            >
              APPLY FILTER
            </Button>
          </Grid>
        </Grid>
      </Container>

      {arrMovieListFilterd?.results?.length > 0 ? (
        <Fragment>
          <List
            arrMovieList={arrMovieListFilterd}
            setPage={setPage}
            arrGenresMovieList={arrGenresMovieList}
          />
        </Fragment>
      ) : (
        <Fragment>
          <List
            arrMovieList={arrMovieList}
            setPage={setPage}
            arrGenresMovieList={arrGenresMovieList}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ContentList;
