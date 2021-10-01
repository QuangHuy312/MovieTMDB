import { Grid } from "@material-ui/core";
import React from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const Photos = ({ detailPhotos }) => {
  const { backdrops } = detailPhotos;
  const { imagePhotos } = useStyle();
  return (
    <Grid container spacing={3} style={{ paddingTop: 30 }}>
      {backdrops?.slice(0, 24)?.map((poster) => {
        return (
          <Grid item xs={6} md={4}>
            <img
              src={`${IMAGE_URL}${WIDTH_IMAGE}${poster.file_path}`}
              alt="photos"
              className={imagePhotos}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Photos;
