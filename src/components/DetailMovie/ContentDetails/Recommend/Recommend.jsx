import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import clsx from "clsx";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Recommend = ({ detailRecommend }) => {
  const {
    content,
    card,
    title,
    rated,
    iconArrow,
    titleMovie,
    contentCard,
    poster,
  } = useStyle();
  const history = useHistory();
  const arrow = clsx(rated, iconArrow);
  return (
    <Container maxWidth="xxl" className={content}>
      <Typography variant="h1" className={title}>
        We Recommended for you
      </Typography>
      <Grid container>
        {detailRecommend?.slice(0, 6)?.map((recommend) => {
          return (
            <Grid item xs={6} md={4} lg={2} key={recommend.id}>
              <Card className={card}>
                <Box className={contentCard}>
                  <CardMedia
                    image={`${IMAGE_URL}${WIDTH_IMAGE}${recommend.poster_path}`}
                    className={poster}
                  />
                  <Typography
                    variant="h2"
                    component="span"
                    className={arrow}
                    onClick={() =>
                      history.push({ pathname: `${recommend.id}` })
                    }
                  >
                    <ArrowRightAltIcon />
                  </Typography>
                  <Typography variant="h1" className={rated}>
                    {Math.ceil(recommend.vote_average)}
                  </Typography>
                </Box>
                <CardContent>
                  <Typography
                    variant="body2"
                    className={titleMovie}
                    onClick={() =>
                      history.push({ pathname: `${recommend.id}` })
                    }
                  >
                    {recommend?.title || recommend?.name}
                    <Typography variant="span">
                      (
                      {recommend?.release_date?.slice(0, 4) ||
                        recommend?.first_air_date?.slice(0, 4)}
                      )
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Recommend;
