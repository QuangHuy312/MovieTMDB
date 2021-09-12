import React, { Fragment } from "react";
import Banner from "../../components/PaginationList/Banner/Banner";
import ContentListTvShow from "../../components/PaginationList/ContentList/TVShow/ContentListTvShow";

const TVList = (props) => {
  return (
    <Fragment>
      <Banner />
      <ContentListTvShow />
    </Fragment>
  );
};

export default TVList;
