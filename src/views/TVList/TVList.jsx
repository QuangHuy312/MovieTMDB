import queryString from "query-string";
import React, { Fragment, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  getGenresTVShowListAction,
  getTVShowListAction,
} from "../../../src/redux/action/MovieManagerAction";
import Banner from "../../components/PaginationList/Banner/Banner";
import DetailTVShowList from "../../components/PaginationList/ContentList/DetailTVShowList/DetailTVShowList";

const MovieList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const queryparams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
    };
  }, [location.search]);
  const { arrTVShowList, arrGenresTVShowList } = useSelector(
    (state) => state.MovieManagerReducer
  );

  useEffect(() => {
    setPage(queryparams.page);
    dispatch(getTVShowListAction(queryparams));
    dispatch(getGenresTVShowListAction);
  }, [queryparams]);
  return (
    <Fragment>
      <Banner />
      <DetailTVShowList
        queryparams={queryparams}
        arrGenresTVShowList={arrGenresTVShowList}
        arrTVShowList={arrTVShowList}
        page={page}
      />
    </Fragment>
  );
};

export default MovieList;
