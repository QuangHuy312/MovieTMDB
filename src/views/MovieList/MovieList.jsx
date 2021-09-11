import React, { Fragment } from "react";
import Banner from "../../components/PaginationList/Banner/Banner";
import ContentList from "../../components/PaginationList/ContentList/ContentList";

const MovieList = () => {
  return (
    <Fragment>
      <Banner />
      <ContentList />
    </Fragment>
  );
};

export default MovieList;
