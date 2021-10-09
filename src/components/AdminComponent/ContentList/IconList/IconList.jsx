import {
  div,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  OutlinedInput,
  Select,
  Tooltip,
  Typography,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { RemoveCircleOutline } from "@material-ui/icons";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClearIcon from "@material-ui/icons/Clear";
import ListIcon from "@material-ui/icons/List";
import StarsIcon from "@material-ui/icons/Stars";
import { Rating } from "@material-ui/lab";
import clsx from "clsx";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import React, { Fragment, useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { useHistory } from "react-router";
import useStyle from "./style";

const IconList = ({
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
  const history = useHistory();

  const [showRating, setShowRating] = useState(false);
  const [addList, setAddList] = useState(false);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        marginTop: 60,
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
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
  const {
    root,
    ratedPoint,
    contentIcons,
    bgRating,
    bgFavorite,
    textIcon,
    textIconAddList,
    textIconRemove,
    textIconFavorite,
    textActiveIconFavorite,
    contentRating,
    contentAddList,
    hoverIconFavorite,
    hoverIconAddList,
    hoverIconRemove,
    formControl,
    inputForm,
    titleMovie,
  } = useStyle();
  const contentIconRemove = clsx(hoverIconRemove, contentIcons);
  const contentIconAddList = clsx(hoverIconAddList, contentIcons);
  const rated = clsx(contentIcons, bgRating);
  const contentIconFavorite = clsx(hoverIconFavorite, contentIcons);
  const contentActiveFavorite = clsx(
    hoverIconFavorite,
    contentIcons,
    bgFavorite
  );
  return (
    <List className={root}>
      <ListItem>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <Fragment>
              <div
                className={root}
                onClick={() => setShowRating(!showRating)}
                {...bindTrigger(popupState)}
              >
                <div className={rated}>
                  {contentList?.rating ? (
                    <Typography variant="body2" className={ratedPoint}>
                      {contentList?.rating}
                    </Typography>
                  ) : (
                    <StarsIcon
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )}
                </div>
                <Typography variant="body2" className={textIcon}>
                  Your Rating
                </Typography>
              </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                style={{ marginTop: 15 }}
              >
                <div className={contentRating}>
                  <Tooltip title="Clear">
                    <RemoveCircleOutline
                      size="small"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClickClearRating(contentList?.id)}
                    />
                  </Tooltip>
                  <Typography
                    variant="body2"
                    component="span"
                    style={{ marginLeft: 10 }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={contentList?.rating / 2}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        handleClickRating(contentList?.id, newValue * 2);
                      }}
                    />
                  </Typography>
                </div>
              </Popover>
            </Fragment>
          )}
        </PopupState>
      </ListItem>
      <ListItem>
        <div className={root}>
          {contentList?.favorite ? (
            <div
              className={contentActiveFavorite}
              onClick={() =>
                handleClickRemoveFavorite(media_type, contentList?.id)
              }
            >
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                }}
              >
                <AiTwotoneHeart className={textActiveIconFavorite} />
              </Typography>
            </div>
          ) : (
            <div className={contentIconFavorite}>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                }}
                onClick={() =>
                  handleClickAddFavorite(media_type, contentList.id)
                }
              >
                <AiTwotoneHeart className={textIconFavorite} />
              </Typography>
            </div>
          )}

          <Typography variant="body2" className={textIcon}>
            Favorite
          </Typography>
        </div>
      </ListItem>
      <ListItem>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <Fragment>
              <div
                className={root}
                onClick={() => setAddList(!addList)}
                {...bindTrigger(popupState)}
              >
                <div className={contentIconAddList}>
                  <Typography variant="body2">
                    <ListIcon className={textIconAddList} />
                  </Typography>
                </div>
                <Typography variant="body2" className={textIcon}>
                  Add to List
                </Typography>
              </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                style={{ marginTop: 15 }}
              >
                <div className={contentAddList}>
                  <Typography
                    variant="span"
                    onClick={() =>
                      history.push(`/${infoUser.username}/list/new`)
                    }
                  >
                    Create New List
                  </Typography>

                  <FormControl className={formControl}>
                    <InputLabel className={inputForm}>
                      Add
                      <Typography variant="span" className={titleMovie}>
                        {contentList?.title?.slice(0, 25) ||
                          contentList?.name?.slice(0, 25)}
                      </Typography>
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={list}
                      displayEmpty
                      onChange={handleChange}
                      input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
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
                                      contentList?.id
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
                            variant="body1"
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
              </Popover>
            </Fragment>
          )}
        </PopupState>
      </ListItem>
      <ListItem>
        <div
          className={root}
          onClick={() => {
            handleRemove(media_type, contentList?.id);
          }}
        >
          <div className={contentIconRemove}>
            <Typography variant="body2">
              <ClearIcon className={textIconRemove} />
            </Typography>
          </div>
          <Typography variant="body2" className={textIcon}>
            Remove
          </Typography>
        </div>
      </ListItem>
    </List>
  );
};

export default IconList;
