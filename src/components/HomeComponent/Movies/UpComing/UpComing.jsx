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
// import useStyle from "./style";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import clsx from "clsx";
import { useHistory } from "react-router";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import useStyle from "../TopRated/style";

const UpComing = ({ arrMovieUpComing }) => {
  const { viewAllIcon, media, card, title, rated, iconArrow, contentCard } =
    useStyle();
  const arrow = clsx(rated, iconArrow);
  const history = useHistory();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className={viewAllIcon}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<SubdirectoryArrowRightOutlinedIcon />}
            style={{ borderRadius: 10 }}
            onClick={() => history.push("/movies/list")}
          >
            View All
          </Button>
        </Grid>
        {arrMovieUpComing?.slice(0, 12)?.map((movie) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
              <Card className={card}>
                <div className={contentCard}>
                  <CardMedia
                    image={`${IMAGE_URL}${WIDTH_IMAGE}${movie.poster_path}`}
                    className={media}
                    title="Paella dish"
                  />
                  <Typography
                    variant="h2"
                    component="span"
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
                    component="p"
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

export default UpComing;
