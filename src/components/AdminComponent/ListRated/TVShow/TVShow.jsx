import React, { Fragment } from "react";
import ContentList from "../../ContentList/ContentList";

const TVShow = ({ arrListRatedTV }) => {
  const handleClick = () => {
    console.log(456);
  };
  return (
    <Fragment>
      {arrListRatedTV?.map((infoTV) => {
        return <ContentList contentList={infoTV} handleClick={handleClick} />;
      })}
    </Fragment>
  );
};

export default TVShow;
