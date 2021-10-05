import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ContentTabMovie from "./ContentTabMovie/ContentTabMovie";
import useStyle from "./style";

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
    <Container maxWidth="xl" className={content}>
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
        <ContentTabMovie arrContentTabMovie={arrMovieTopRated} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ContentTabMovie arrContentTabMovie={arrMovieUpComing} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContentTabMovie arrContentTabMovie={arrMovieNowPlaying} />
      </TabPanel>
    </Container>
  );
};

export default Movies;
