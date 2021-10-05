import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useHistory } from "react-router";
import clsx from "clsx";

const SimilarMovie = ({ detailSimilar }) => {
  const history = useHistory();
  const {
    titleText,
    content,
    card,
    contentCard,
    media,
    rated,
    iconArrow,
    title,
  } = useStyle();
  const arrow = clsx(rated, iconArrow);

  return (
    <Fragment>
      <Typography variant="h4" className={titleText}>
        You may also like...
      </Typography>

      <Container maxWidth="xl" className={content}>
        <Grid container spacing={4}>
          {detailSimilar?.slice(0, 12)?.map((movieSimilar) => {
            return (
              <Grid item xs={6} md={4} lg={6}>
                <Card className={card}>
                  <div className={contentCard}>
                    <CardMedia
                      image={`${IMAGE_URL}${WIDTH_IMAGE}${movieSimilar.poster_path}`}
                      className={media}
                      title="Paella dish"
                    />
                    <Typography
                      variant="h2"
                      component="span"
                      className={arrow}
                      onClick={() =>
                        history.push({ pathname: `${movieSimilar.id}` })
                      }
                    >
                      <ArrowRightAltIcon />
                    </Typography>
                    <Typography variant="h1" className={rated}>
                      {`${movieSimilar.vote_average.toFixed(1)}`}
                    </Typography>
                  </div>
                  <CardContent>
                    <Typography
                      variant="body2"
                      className={title}
                      onClick={() =>
                        history.push({ pathname: `${movieSimilar.id}` })
                      }
                    >
                      {movieSimilar.title || movieSimilar.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default SimilarMovie;
