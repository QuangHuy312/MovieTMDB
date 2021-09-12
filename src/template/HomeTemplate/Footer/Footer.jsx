import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./style";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { content, title, list, contact } = useStyle();
  return (
    <div className={content}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={title}>
              Movie Categories
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <NavLink to="/">Action</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Adventure</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Animation</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Comedy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Crime</NavLink>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <NavLink to="/">Drama</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Fantacy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Horror</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Mystrey</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Romance</NavLink>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={title}>
              Movie Categories
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <NavLink to="/">Valentine Day</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Comedies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Scary TV Series</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Best 2021 Documentaries</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Crime TV</NavLink>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <NavLink to="/">Reality TV Shows</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Cartoon</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">TV News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Fantacy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Romance</NavLink>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" className={title}>
              Contact with me
            </Typography>
            <Grid container>
              <Grid item className={contact}>
                <NavLink to="/">
                  <FacebookIcon />
                </NavLink>

                <NavLink to="/">
                  <TwitterIcon />
                </NavLink>

                <NavLink to="/">
                  <InstagramIcon />
                </NavLink>

                <NavLink to="/">
                  <YouTubeIcon />
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>
          <Typography
            variant="body2"
            style={{
              textAlign: "center",
              paddingTop: 40,
              color: "#877474",
            }}
          >
            © Copyright 2021. Create by{" "}
            <Typography variant="body" style={{ color: "#f9ab00" }}>
              Quang Huy
            </Typography>
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
