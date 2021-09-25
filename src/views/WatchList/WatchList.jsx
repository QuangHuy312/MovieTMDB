import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../components/AdminComponent/ListRated/Movies/Movies";
import TVShow from "../../components/AdminComponent/ListRated/TVShow/TVShow";
import TabsComponent from "../../components/AdminComponent/TabsComponent/TabsComponent";
import {
  getCreatedListAction,
  getWatchListMovieAction,
  getWatchListTVAction,
} from "../../redux/action/DashBoardManagerAction";

const WatchList = ({ infoUser, sessionId }) => {
  const { arrWatchListMovie, arrWatchListTV, arrCreatedList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchListMovieAction(infoUser.id, sessionId, 1));
    dispatch(getWatchListTVAction(infoUser.id, sessionId, 1));
    dispatch(getCreatedListAction(infoUser.id, sessionId));
  }, [dispatch]);
  const useStyle = makeStyles(() => {
    return {
      content: {
        padding: "20px 0 40px",
        "& .MuiTab-root": {
          minWidth: 50,
          marginLeft: 30,
        },
        "& .Mui-selected": {
          "& .MuiTab-wrapper": {
            borderBottom: "4px solid blue",
          },
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
    <Container className={classes.content}>
      <div style={{ display: "flex" }}>
        <Typography className={classes.title} variant="h6">
          My Ratings
        </Typography>
        <TabsComponent
          arrListMovie={arrWatchListMovie}
          arrListTV={arrWatchListTV}
          setValue={setValue}
          value={value}
        />
      </div>
      <TabPanel value={value} index={0}>
        <Movies
          infoUser={infoUser}
          sessionId={sessionId}
          arrListMovie={arrWatchListMovie}
          arrCreatedList={arrCreatedList}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TVShow
          arrListTV={arrWatchListTV}
          infoUser={infoUser}
          sessionId={sessionId}
          arrCreatedList={arrCreatedList}
        />
      </TabPanel>
    </Container>
  );
};

export default WatchList;
