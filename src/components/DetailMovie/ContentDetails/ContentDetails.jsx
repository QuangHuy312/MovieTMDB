import { Box, Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Photos from "../../DetailMovie/ContentDetails/Photos/Photos";
import Credit from "./Credit/Credit";
import Recommend from "./Recommend/Recommend";
import Reviews from "./Reviews/Reviews";
import SimilarMovie from "./Similar/Similar";
import useStyle from "./style";

const ContentDetails = ({
  detailPhotos,
  detailCredit,
  detailSimilar,
  detailReviews,
  detailRecommend,
}) => {
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
    <Fragment>
      <Container maxWidth="xl" className={content}>
        <Grid container>
          <Grid item xs={12} lg={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Reviews" {...a11yProps(0)} />
              <Tab label="Credit" {...a11yProps(1)} />
              <Tab label="Photos" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              {detailReviews?.length > 0 ? (
                <Fragment>
                  {detailReviews?.map((reviews, index) => (
                    <Reviews reviews={reviews} key={index} />
                  ))}
                </Fragment>
              ) : (
                <div> No Review</div>
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Credit detailCredit={detailCredit} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Photos detailPhotos={detailPhotos} />
            </TabPanel>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SimilarMovie detailSimilar={detailSimilar} />
          </Grid>
        </Grid>
      </Container>

      <div>
        {detailRecommend.length > 0 ? (
          <Recommend detailRecommend={detailRecommend} />
        ) : null}
      </div>
    </Fragment>
  );
};

export default ContentDetails;
