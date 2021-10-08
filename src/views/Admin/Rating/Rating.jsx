import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../../../components/AdminComponent/Movies/Movies";
import TabsComponent from "../../../components/AdminComponent/TabsComponent/TabsComponent";
import TVShow from "../../../components/AdminComponent/TVShow/TVShow";
import {
  getCreatedListAction,
  getFavoriteMovieListAction,
  getFavoriteTVListAction,
} from "../../../redux/action/DashBoardManagerAction";

const Rating = ({ infoUser, sessionId }) => {
  const {
    arrListRatedMovie,
    arrListRatedTV,
    arrCreatedList,
    arrListFavoriteMovie,
    arrListFavoriteTV,
  } = useSelector((state) => state.DashBoardManagerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreatedListAction(infoUser.id, sessionId));
    dispatch(getFavoriteMovieListAction(infoUser.id, sessionId, 1));
    dispatch(getFavoriteTVListAction(infoUser.id, sessionId, 1));
  }, [dispatch]);

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
          My Ratings
        </Typography>
        <TabsComponent
          arrListMovie={arrListRatedMovie}
          arrListTV={arrListRatedTV}
          setValue={setValue}
          value={value}
        />
      </Box>
      <TabPanel value={value} index={0}>
        <Movies
          infoUser={infoUser}
          sessionId={sessionId}
          arrListMovie={arrListRatedMovie}
          arrCreatedList={arrCreatedList}
          arrListRatedMovie={arrListRatedMovie}
          arrListFavoriteMovie={arrListFavoriteMovie}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TVShow
          arrListTV={arrListRatedTV}
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

export default Rating;
