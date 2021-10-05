import React, { Fragment } from "react";
import Banner from "../../components/PaginationList/Banner/Banner";
import MovieCatalog from "../../components/PaginationList/ContentList/MovieCatalog/MovieCatalog";

const MovieList = () => {
  return (
    <Fragment>
      <Banner />
      <MovieCatalog />
    </Fragment>
  );
};

export default MovieList;
