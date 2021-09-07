import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useStyle from "./style";
import TopRated from "./TopRated/TopRated";
import UpComing from "./UpComing/UpComing";
import NowPlaying from "./NowPlaying/NowPlaying";

const Movies = ({ arrMovieTopRated, arrMovieNowPlaying, arrMovieUpComing }) => {
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

  const { content } = useStyle();
  return (
    <Container className={content}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Top Rated" {...a11yProps(0)} />
        <Tab label="Up Coming" {...a11yProps(1)} />
        <Tab label="Now Playing" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TopRated arrMovieTopRated={arrMovieTopRated} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UpComing arrMovieUpComing={arrMovieUpComing} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NowPlaying arrMovieNowPlaying={arrMovieNowPlaying} />
      </TabPanel>
    </Container>
  );
};

export default Movies;
