import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/PaginationList/Banner/Banner";
import ContentList from "../../components/PaginationList/ContentList/ContentList";
import {
  getGenresMovieListAction,
  getMovieListAction,
} from "../../redux/action/MovieManagerAction";

const MovieList = (props) => {
  const page = props.match.params.number;
  const dispatch = useDispatch();
  const { arrMovieList, arrGenresMovieList } = useSelector(
    (state) => state.MovieManagerReducer
  );
  useEffect(() => {
    page ? dispatch(getMovieListAction(page)) : dispatch(getMovieListAction(1));
    dispatch(getGenresMovieListAction);
  }, [page, dispatch]);

  return (
    <Fragment>
      <Banner />
      <ContentList
        arrMovieList={arrMovieList}
        page={page}
        arrGenresMovieList={arrGenresMovieList}
      />
    </Fragment>
  );
};

export default MovieList;
