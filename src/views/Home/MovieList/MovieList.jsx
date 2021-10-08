import queryString from "query-string";
import React, { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  getGenresMovieListAction,
  getMovieListAction,
} from "../../../redux/action/MovieManagerAction";
import Banner from "../../../components/PaginationList/Banner/Banner";
import DetailMovieList from "../../../components/PaginationList/ContentList/DetailMovieList/DetailMovieList";

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const queryparams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
    };
  }, [location.search]);
  const { arrMovieList, arrGenresMovieList } = useSelector(
    (state) => state.MovieManagerReducer
  );

  useEffect(() => {
    setPage(queryparams.page);
    dispatch(getMovieListAction(queryparams, setLoading));
    dispatch(getGenresMovieListAction);
  }, [queryparams, dispatch]);
  return (
    <Fragment>
      <Banner />
      <DetailMovieList
        queryparams={queryparams}
        arrGenresMovieList={arrGenresMovieList}
        arrMovieList={arrMovieList}
        page={page}
        loading={loading}
        setLoading={setLoading}
      />
    </Fragment>
  );
};

export default MovieList;
