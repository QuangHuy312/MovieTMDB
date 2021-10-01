import {
  Card,
  CardContent,
  CardMedia,
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
  const { content, card, title, rated, iconArrow, contentCard, poster } =
    useStyle();
  const history = useHistory();
  const arrow = clsx(rated, iconArrow);
  return (
    <div className={content}>
      <Typography variant="h4" style={{ paddingLeft: 50 }}>
        We Recommended for you
      </Typography>
      <Grid container style={{ paddingTop: 50 }}>
        {detailRecommend?.slice(0, 6)?.map((recommend) => {
          return (
            <Grid item xs={6} md={4} lg={2}>
              <Card className={card}>
                <div className={contentCard}>
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
                  <Typography variant="h1" component="div" className={rated}>
                    {Math.ceil(recommend.vote_average)}
                  </Typography>
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    className={title}
                    onClick={() =>
                      history.push({ pathname: `${recommend.id}` })
                    }
                  >
                    {recommend?.title || recommend?.name}
                    <Typography
                      variant="body"
                      style={{
                        marginLeft: 10,
                        color: "#f9ab00",
                      }}
                    >
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
    </div>
  );
};

export default Recommend;
