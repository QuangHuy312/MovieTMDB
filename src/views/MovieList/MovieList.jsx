import React, { Fragment } from "react";
import Banner from "../../components/PaginationList/Banner/Banner";
import ContentListMovie from "../../../src/components/PaginationList/ContentList/Movie/ContentListMovie";

const MovieList = () => {
  return (
    <Fragment>
      <Banner />
      <ContentListMovie />
    </Fragment>
  );
};

export default MovieList;
