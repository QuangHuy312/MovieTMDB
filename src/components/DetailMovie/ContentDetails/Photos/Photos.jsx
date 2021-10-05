import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const Photos = ({ detailPhotos }) => {
  const { backdrops } = detailPhotos;
  const { imagePhotos } = useStyle();
  return (
    <Grid container spacing={3}>
      {backdrops?.slice(0, 24)?.map((poster, index) => {
        return (
          <Fragment key={index}>
            <Grid item xs={4}>
              <img
                src={`${IMAGE_URL}${WIDTH_IMAGE}${poster.file_path}`}
                alt="photos"
                className={imagePhotos}
              />
            </Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default Photos;
