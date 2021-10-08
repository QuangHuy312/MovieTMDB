import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../../components/AdminComponent/Movies/Movies";
import TVShow from "../../../components/AdminComponent/TVShow/TVShow";
import TabsComponent from "../../../components/AdminComponent/TabsComponent/TabsComponent";
import {
  getCreatedListAction,
  getWatchListMovieAction,
  getWatchListTVAction,
} from "../../../redux/action/DashBoardManagerAction";

const WatchList = ({ infoUser, sessionId }) => {
  const {
    arrWatchListMovie,
    arrWatchListTV,
    arrCreatedList,
    arrListRatedTV,
    arrListRatedMovie,
    arrListFavoriteMovie,
    arrListFavoriteTV,
  } = useSelector((state) => state.DashBoardManagerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchListMovieAction(infoUser.id, sessionId, 1));
    dispatch(getWatchListTVAction(infoUser.id, sessionId, 1));
    dispatch(getCreatedListAction(infoUser.id, sessionId));
  }, []);
  const useStyle = makeStyles(() => {
    return {
      content: {
        padding: "20px 0 40px",
        "& .MuiTabs-indicator	": {
          background: "transparent",
        },
        "& .MuiTab-root": {
          minWidth: 50,
          marginLeft: 30,
        },
        "& .Mui-selected": {
          "& .MuiTab-wrapper": {
            borderBottom: "4px solid blue",
          },
        },
        "& .MuiBox-root": {
          padding: 0,
          paddingTop: 15,
        },
      },

      title: {
        fontWeight: "bold",
        fontSize: 25,
      },
    };
  });
  const [value, setValue] = useState(0);
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const classes = useStyle();
  return (
    <Container maxWidth="xl" className={classes.content}>
      <Box display="flex">
        <Typography className={classes.title} variant="h6">
          My Watchlist
        </Typography>
        <TabsComponent
          arrListMovie={arrWatchListMovie}
          arrListTV={arrWatchListTV}
          setValue={setValue}
          value={value}
        />
      </Box>
      <TabPanel value={value} index={0}>
        <Movies
          infoUser={infoUser}
          sessionId={sessionId}
          arrListMovie={arrWatchListMovie}
          arrCreatedList={arrCreatedList}
          arrListRatedMovie={arrListRatedMovie}
          arrListFavoriteMovie={arrListFavoriteMovie}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TVShow
          arrListTV={arrWatchListTV}
          infoUser={infoUser}
          sessionId={sessionId}
          arrCreatedList={arrCreatedList}
          arrListRatedTV={arrListRatedTV}
          arrListFavoriteTV={arrListFavoriteTV}
        />
      </TabPanel>
    </Container>
  );
};

export default WatchList;
