import { Container, Typography } from "@material-ui/core";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import banner from "../../../assets/banner-profile.jpg";
import NO_AVATAR from "../../../assets/img_no_avatar.png";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";

const Banner = ({ infoUser, arrTotalRatedTVShow, arrTotalRatedMovies }) => {
  const percentMovie = arrTotalRatedMovies?.reduce((total, item) => {
    return (total += item.rating);
  }, 0);

  const percentageMovie = Math.floor(
    (percentMovie * 10) / arrTotalRatedMovies.length
  );

  const percentTV = arrTotalRatedTVShow?.reduce((total, item) => {
    return (total += item.rating);
  }, 0);

  const percentageTV = Math.floor(
    (percentTV * 10) / arrTotalRatedTVShow.length
  );
  const { content, backdrop, avatar, about, userName, text, contentWrapper } =
    useStyle({
      backgroundImage: `url(${banner})`,
    });

  return (
    <div className={backdrop}>
      <Container>
        <div className={content}>
          <NavLink to="/profile">
            <img
              src={
                !!infoUser.avatar?.tmdb
                  ? `${IMAGE_URL}${WIDTH_IMAGE}${infoUser?.avatar?.tmdb?.avatar_path}`
                  : NO_AVATAR
              }
              alt="avatar"
              className={avatar}
            />
          </NavLink>
          <div className={about}>
            <div>
              <NavLink to="/profile">
                <Typography variant="h4" className={userName}>
                  {infoUser.name || infoUser.username}
                </Typography>
              </NavLink>
            </div>
            <div className={contentWrapper}>
              <div style={{ borderRight: "1px solid #fff", display: "flex" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                  }}
                >
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
              </div>

              <div style={{ display: "flex", paddingLeft: 20 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                  }}
                >
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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
