import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import clsx from "clsx";
import { useHistory } from "react-router";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";

const ContentTabMovie = ({ arrContentTabMovie }) => {
  const { viewAllIcon, media, card, title, rated, iconArrow, contentCard } =
    useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={viewAllIcon}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SubdirectoryArrowRightOutlinedIcon />}
            onClick={() => history.push("/movies/list")}
          >
            View All
          </Button>
        </Grid>
        {arrContentTabMovie?.slice(0, 12)?.map((movie) => {
          return (
            <Grid item xs={6} md={4} lg={3} xl={2} key={movie.id}>
              <Card className={card}>
                <div className={contentCard}>
                  <CardMedia
                    image={`${IMAGE_URL}${WIDTH_IMAGE}${movie.poster_path}`}
                    className={media}
                  />
                  <Typography
                    variant="h2"
                    className={arrow}
                    onClick={() => history.push(`/detailmovies/${movie.id}`)}
                  >
                    <ArrowRightAltIcon />
                  </Typography>
                  <Typography variant="h1" component="div" className={rated}>
                    {movie.vote_average}
                  </Typography>
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    className={title}
                    onClick={() => history.push(`/detailmovies/${movie.id}`)}
                  >
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default ContentTabMovie;
