import { Box, Container, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Movies from "../../components/ListRated/Movies/Movies";
import TVShow from "../../components/ListRated/TVShow/TVShow";

const Rating = () => {
  const { arrTotalRatedMovies, arrTotalRatedTVShow } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const useStyle = makeStyles(() => {
    return {
      content: {
        padding: "20px 0 40px",
        "& .MuiTab-root": {
          minWidth: 50,
          marginLeft: 30,
        },
        // "& .PrivateTabIndicator-colorSecondary-28": {
        //   backgroundColor: "transparent",
        // },
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyle();
  return (
    <Container className={classes.content}>
      <div style={{ display: "flex" }}>
        <Typography className={classes.title} variant="h6">
          My Ratings
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
        >
          <Tab
            label={
              <Typography variant="body2">
                Movie
                <Typography
                  variant="body"
                  style={{ color: "#656ce5", fontSize: 13, paddingLeft: 5 }}
                >
                  {arrTotalRatedMovies.length}
                </Typography>
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography variant="body2">
                Movie
                <Typography
                  variant="body"
                  style={{ color: "#656ce5", fontSize: 13, paddingLeft: 5 }}
                >
                  {arrTotalRatedTVShow.length}
                </Typography>
              </Typography>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Movies arrTotalRatedMovies={arrTotalRatedMovies} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TVShow arrTotalRatedTVShow={arrTotalRatedTVShow} />
      </TabPanel>
    </Container>
  );
};

export default Rating;
