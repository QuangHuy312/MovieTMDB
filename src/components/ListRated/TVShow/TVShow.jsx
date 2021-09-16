import { List, ListItem, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "../style";
import moment from "moment";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ClearIcon from "@material-ui/icons/Clear";
import clsx from "clsx";
import ListIcon from "@material-ui/icons/List";

const TVShow = ({ arrTotalRatedTVShow }) => {
  const {
    title,
    content,
    contentInfo,
    poster,
    date,
    contentIcons,
    icons,
    textIcon,
    listIcons,
    iconRemove,
    iconFavorite,
    iconAddList,
    rating,
    contentRating,
  } = useStyle();

  const icRemove = clsx(iconRemove, icons);
  const icAddList = clsx(icons, iconAddList);
  const icFavorite = clsx(icons, iconFavorite);
  const rated = clsx(contentIcons, contentRating);
  return (
    <Fragment>
      {arrTotalRatedTVShow?.map((infoMovie) => {
        return (
          <div className={content}>
            <div>
              <img
                src={`${IMAGE_URL}${WIDTH_IMAGE}${infoMovie.poster_path}`}
                alt="poster"
                className={poster}
              />
            </div>
            <div className={contentInfo}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    padding: "7px 10px 0",
                  }}
                >
                  <CircularProgressbar
                    value={infoMovie.vote_average * 10}
                    text={`${infoMovie.vote_average * 10}%`}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: "30px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 255, 0, ${
                        infoMovie.vote_average * 10
                      })`,
                      textColor: "black",
                      trailColor: "#204529",
                      backgroundColor: "#20c172",
                    })}
                  />
                </div>
                <div>
                  <Typography className={title} variant="body2">
                    {infoMovie.name}
                  </Typography>
                  <Typography variant="body" className={date}>
                    {moment(infoMovie.release_date).format("LL")}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="body2">
                  {infoMovie.overview.slice(0, 400)}
                </Typography>
              </div>
              <div className={listIcons}>
                <List style={{ display: "flex" }}>
                  <ListItem>
                    <div className={rated}>
                      <Typography variant="body2" className={rating}>
                        {infoMovie.rating}
                      </Typography>
                    </div>
                    <Typography variant="body2" className={textIcon}>
                      Your Rating
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <div className={contentIcons}>
                      <Typography variant="body2" className={icFavorite}>
                        <FavoriteBorderIcon />
                      </Typography>
                    </div>
                    <Typography variant="body2" className={textIcon}>
                      Favorite
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <div className={contentIcons}>
                      <Typography variant="body2" className={icAddList}>
                        <ListIcon />
                      </Typography>
                    </div>
                    <Typography variant="body2" className={textIcon}>
                      Add to List
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <div className={contentIcons}>
                      <Typography variant="body2" className={icRemove}>
                        <ClearIcon />
                      </Typography>
                    </div>
                    <Typography variant="body2" className={textIcon}>
                      Remove
                    </Typography>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default TVShow;
