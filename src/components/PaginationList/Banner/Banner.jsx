import { Container, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import BACK_DROP from "../../../assets/backdrop_login.jpg";

const Banner = () => {
  const { banner, iconHome, content, textRight } = useStyle({ BACK_DROP });
  return (
    <div className={banner}>
      <Container maxWidth="xl" className={content}>
        <Typography variant="h4">Catalog</Typography>
        <div className={textRight}>
          <NavLink to="/" className={iconHome}>
            Home
          </NavLink>
          <ArrowForwardIosIcon />
          <Typography variant="h5">Catalog</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
