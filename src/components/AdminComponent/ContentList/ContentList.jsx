import {
  div,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import moment from "moment";
import React, { memo } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useHistory } from "react-router";
import NO_POSTER from "../../../assets/img_no_poster.jpg";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import IconList from "./IconList/IconList";
import useStyle from "./style";

const ContentList = ({
  contentList,
  handleClickRating,
  handleClickClearRating,
  handleRemove,
  handleClickAddFavorite,
  handleClickRemoveFavorite,
  handleClickAddToList,
  infoUser,
  arrCreatedList,
  media_type,
}) => {
  const {
    card,
    title,
    content,
    root,
    poster,
    date,
    overview,
    circularRate,

    listIcons,
  } = useStyle();
  const history = useHistory();
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card className={card}>
      <div className={content}>
        <CardMedia
          image={
            contentList.poster_path
              ? `${IMAGE_URL}${WIDTH_IMAGE}${contentList.poster_path}`
              : NO_POSTER
          }
          className={poster}
        />
        <CardContent>
          <div className={root}>
            <div className={circularRate}>
              <CircularProgressbar
                value={contentList.vote_average * 10}
                text={`${contentList.vote_average * 10}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "30px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgba(0, 255, 0, ${
                    contentList.vote_average * 10
                  })`,
                  textColor: "black",
                  trailColor: "#204529",
                  backgroundColor: "#20c172",
                })}
              />
            </div>
            <div>
              <Typography
                className={title}
                variant="body2"
                onClick={() => {
                  if (media_type == "movie") {
                    history.push({
                      pathname: `/detailmovies/${contentList.id}`,
                    });
                  } else if (media_type == "tv") {
                    history.push({
                      pathname: `/detailtvshow/${contentList.id}`,
                    });
                  }
                }}
              >
                {contentList.title || contentList.name}
              </Typography>
              <Typography variant="body1" className={date}>
                {moment(contentList.release_date).format("LL")}
              </Typography>
            </div>
          </div>
          <div className={overview}>
            <Typography variant="body2">
              {contentList.overview.slice(0, 400)}
            </Typography>
          </div>
          {!isDeskTop && (
            <div className={listIcons}>
              <IconList
                contentList={contentList}
                handleClickRating={handleClickRating}
                handleClickClearRating={handleClickClearRating}
                handleRemove={handleRemove}
                handleClickAddFavorite={handleClickAddFavorite}
                handleClickRemoveFavorite={handleClickRemoveFavorite}
                handleClickAddToList={handleClickAddToList}
                infoUser={infoUser}
                arrCreatedList={arrCreatedList}
                media_type={media_type}
              />
            </div>
          )}
        </CardContent>
      </div>
      {isMobile && (
        <div>
          <Typography variant="body2">
            {contentList.overview.slice(0, 400)}
          </Typography>
        </div>
      )}
      {isDeskTop && (
        <div className={listIcons}>
          <IconList
            contentList={contentList}
            handleClickRating={handleClickRating}
            handleRemove={handleRemove}
            handleClickAddFavorite={handleClickAddFavorite}
            handleClickRemoveFavorite={handleClickRemoveFavorite}
            handleClickAddToList={handleClickAddToList}
            infoUser={infoUser}
            arrCreatedList={arrCreatedList}
            media_type={media_type}
          />
        </div>
      )}
    </Card>
  );
};

export default memo(ContentList);
