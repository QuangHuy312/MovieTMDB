import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import banner from "../../../assets/banner-profile.jpg";
import NO_AVATAR from "../../../assets/img_no_avatar.png";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";

const Banner = ({ infoUser, arrListRatedTV, arrListRatedMovie }) => {
  const percentMovie = arrListRatedMovie?.reduce((total, item) => {
    return (total += item.rating);
  }, 0);

  const percentageMovie = Math.floor(
    (percentMovie * 10) / arrListRatedMovie.length
  );

  const percentTV = arrListRatedTV?.reduce((total, item) => {
    return (total += item.rating);
  }, 0);

  const percentageTV = Math.floor((percentTV * 10) / arrListRatedTV.length);
  const {
    backdrop,
    contentAvatar,
    avatar,
    about,
    userName,
    text,
    contentWrapper,
    circular,
  } = useStyle({
    backgroundImage: `url(${banner})`,
  });
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={backdrop}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={2} justifyContent="center">
            <div className={isDeskTop && contentAvatar}>
              <img
                src={
                  !!infoUser.avatar?.tmdb
                    ? `${IMAGE_URL}${WIDTH_IMAGE}${infoUser?.avatar?.tmdb?.avatar_path}`
                    : NO_AVATAR
                }
                alt="avatar"
                className={avatar}
              />
              {isDeskTop && (
                <Typography variant="h5" className={userName}>
                  {infoUser.name || infoUser.username}
                </Typography>
              )}
            </div>
          </Grid>

          <Grid item xs={12} lg={8}>
            <div className={about}>
              {!isDeskTop && (
                <Typography variant="h4" className={userName}>
                  {infoUser.name || infoUser.username}
                </Typography>
              )}

              <Grid item container className={contentWrapper}>
                <Grid
                  item
                  xs={6}
                  lg={4}
                  style={{ display: "flex", borderRight: "2px solid #fff" }}
                >
                  <div className={circular}>
                    <CircularProgressbar
                      value={percentageMovie}
                      text={`${percentageMovie}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        textSize: "30px",
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(0, 255, 0, ${percentageMovie})`,
                        textColor: "#fff",
                        trailColor: "#204529",
                        backgroundColor: "#20c172",
                      })}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" className={text}>
                      Trung Bình <br /> Điểm phim
                    </Typography>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={6}
                  lg={4}
                  style={{ display: "flex", paddingLeft: 20 }}
                >
                  <div className={circular}>
                    <CircularProgressbar
                      value={percentageTV}
                      text={`${percentageTV}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        textSize: "30px",
                        pathTransitionDuration: 0.5,
                        pathColor: `rgba(0, 255, 0, ${percentageTV})`,
                        textColor: "#fff",
                        trailColor: "#204529",
                        backgroundColor: "#20c172",
                      })}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" className={text}>
                      Trung Bình <br /> Điểm TV
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
