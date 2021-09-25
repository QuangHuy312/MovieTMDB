import { Tab, Tabs, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const TabsComponent = ({ arrListMovie, arrListTV, setValue, value }) => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
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
                {arrListMovie.length}
              </Typography>
            </Typography>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Typography variant="body2">
              TV
              <Typography
                variant="body"
                style={{ color: "#656ce5", fontSize: 13, paddingLeft: 5 }}
              >
                {arrListTV.length}
              </Typography>
            </Typography>
          }
          {...a11yProps(1)}
        />
      </Tabs>
    </Fragment>
  );
};

export default TabsComponent;
