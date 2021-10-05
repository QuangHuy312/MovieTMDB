import React, { Fragment } from "react";
import Banner from "../../components/PaginationList/Banner/Banner";
import TVShowCatalog from "../../components/PaginationList/ContentList/TVShowCatalog/TVShowCatalog";

const TVList = (props) => {
  return (
    <Fragment>
      <Banner />
      <TVShowCatalog />
    </Fragment>
  );
};

export default TVList;
