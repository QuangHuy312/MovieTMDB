import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Banner = () => {
  const { banner, iconHome, content } = useStyle();
  return (
    <div className={banner}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">Catalog</Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={content}>
              <NavLink to="/" className={iconHome}>
                <HomeIcon style={{ marginRight: 5 }} />
                Home
              </NavLink>
              <ArrowForwardIosIcon style={{ margin: 7, padding: 4 }} />
              <Typography
                variant="h8"
                style={{ color: "#f9ab00", fontSize: 20, paddingTop: 5 }}
              >
                Catalog
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
