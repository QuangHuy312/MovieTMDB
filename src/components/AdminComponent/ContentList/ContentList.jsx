import {
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ListIcon from "@material-ui/icons/List";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import moment from "moment";
import React, { Fragment, memo, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useHistory } from "react-router";
import NO_POSTER from "../../../assets/img_no_poster.jpg";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "../../AdminComponent/ContentList/style";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

const ContentList = ({
  contentList,

  handleClickRating,
  handleRemove,
  handleClickAddFavorite,
  handleClickRemoveFavorite,
  handleClickAddToList,
  infoUser,
  arrCreatedList,
  media_type,
}) => {
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
    bgRating,
    bgFavorite,
    starRate,
    contentAddList,
    borderContentAddList,
  } = useStyle();

  const icRemove = clsx(iconRemove, icons);
  const icAddList = clsx(icons, iconAddList);
  const icFavorite = clsx(icons, iconFavorite);
  const rated = clsx(contentIcons, bgRating);
  const favorites = clsx(contentIcons, bgFavorite);
  const history = useHistory();

  const [showRating, setShowRating] = useState(false);
  const [addList, setAddList] = useState(false);
  const [bgActiveFavorite, setBgActiveFavorite] = useState(false);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [list, setList] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setList(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className={content}>
      <div>
        <img
          src={`${IMAGE_URL}${WIDTH_IMAGE}${contentList.poster_path}`}
          alt="poster"
          className={poster}
          onError={(e) => (e.target.src = NO_POSTER)}
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
              value={contentList.vote_average * 10}
              text={`${contentList.vote_average * 10}%`}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "30px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(0, 255, 0, ${contentList.vote_average * 10})`,
                textColor: "black",
                trailColor: "#204529",
                backgroundColor: "#20c172",
              })}
            />
          </div>
          <div>
            <Typography className={title} variant="body2">
              {contentList.title}
            </Typography>
            <Typography variant="body" className={date}>
              {moment(contentList.release_date).format("LL")}
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant="body2">
            {contentList.overview.slice(0, 400)}
          </Typography>
        </div>
        <div className={listIcons}>
          <List style={{ display: "flex" }}>
            <ListItem>
              <div
                style={{ display: "flex", cursor: "pointer" }}
                onClick={() => setShowRating(!showRating)}
              >
                <div className={rated}>
                  <Typography variant="body2" className={rating}>
                    {contentList.rating}
                  </Typography>
                </div>
                <Typography variant="body2" className={textIcon}>
                  Your Rating
                </Typography>
              </div>
              {showRating ? (
                <div className={starRate}>
                  <Rating
                    precision={0.5}
                    name="simple-controlled"
                    value={Math.round(contentList.rating * 2) / 4}
                    onChange={(event, newValue) => {
                      handleClickRating(contentList.id, newValue * 2);
                      setShowRating(false);
                    }}
                  />
                </div>
              ) : null}
            </ListItem>
            <ListItem>
              <div style={{ display: "flex" }}>
                <div
                  className={bgActiveFavorite ? favorites : contentIcons}
                  onClick={() => {
                    setBgActiveFavorite(!bgActiveFavorite);
                    !bgActiveFavorite
                      ? handleClickAddFavorite(media_type, contentList.id)
                      : handleClickRemoveFavorite(media_type, contentList.id);
                  }}
                >
                  <Typography variant="body2" className={icFavorite}>
                    <FavoriteBorderIcon />
                  </Typography>
                </div>
                <Typography variant="body2" className={textIcon}>
                  Favorite
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                }}
                onClick={() => setAddList(!addList)}
              >
                <div className={contentIcons}>
                  <Typography variant="body2" className={icAddList}>
                    <ListIcon />
                  </Typography>
                </div>
                <Typography variant="body2" className={textIcon}>
                  Add to List
                </Typography>
              </div>
              {addList ? (
                <div className={contentAddList}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      history.push(`/${infoUser.username}/list/new`)
                    }
                  >
                    <AddIcon fontSize="medium" />
                    <Typography variant="body">Create List</Typography>
                  </div>

                  <div>
                    <FormControl style={{ width: "80%", marginTop: 20 }}>
                      <InputLabel
                        style={{ paddingLeft: 10, fontSize: 14, color: "#fff" }}
                      >
                        Add
                        <Typography
                          variant="body"
                          style={{ marginLeft: 5, color: "#f9ab00" }}
                        >
                          {contentList?.title?.slice(0, 25) ||
                            contentList?.name?.slice(0, 25)}
                        </Typography>
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={list}
                        onChange={handleChange}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Chip"
                          />
                        }
                        MenuProps={MenuProps}
                      >
                        {arrCreatedList.length > 0 ? (
                          <Fragment>
                            {arrCreatedList?.map((list) => {
                              return (
                                <Fragment key={list.id}>
                                  <MenuItem
                                    onClick={() => {
                                      handleClickAddToList(
                                        list.id,
                                        contentList.id
                                      );
                                      setAddList(false);
                                    }}
                                  >
                                    {list.name}
                                  </MenuItem>
                                </Fragment>
                              );
                            })}
                          </Fragment>
                        ) : (
                          <div style={{ marginTop: 10, textAlign: "center" }}>
                            <Typography
                              variant="body"
                              style={{ textAlign: "center" }}
                            >
                              <ArrowDropUpIcon />
                            </Typography>
                            <Typography variant="body2">
                              No List , please click Create List
                            </Typography>
                          </div>
                        )}
                      </Select>
                    </FormControl>
                  </div>

                  <div className={borderContentAddList}></div>
                </div>
              ) : null}
            </ListItem>
            <ListItem>
              <div style={{ display: "flex", cursor: "pointer" }}>
                <div className={contentIcons}>
                  <Typography
                    variant="body2"
                    className={icRemove}
                    onClick={() => {
                      handleRemove(media_type, contentList.id);
                    }}
                  >
                    <ClearIcon />
                  </Typography>
                </div>
                <Typography variant="body2" className={textIcon}>
                  Remove
                </Typography>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default memo(ContentList);
