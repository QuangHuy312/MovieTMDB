import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./style";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
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
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Animation</a>
                  </li>
                  <li>
                    <a href="#">Comedy</a>
                  </li>
                  <li>
                    <a href="#">Crime</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <a href="#">Drama</a>
                  </li>
                  <li>
                    <a href="#">Fantacy</a>
                  </li>
                  <li>
                    <a href="#">Horror</a>
                  </li>
                  <li>
                    <a href="#">Mystrey</a>
                  </li>
                  <li>
                    <a href="#">Romance</a>
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
                    <a href="#">Valentine Day</a>
                  </li>
                  <li>
                    <a href="#">Comedies</a>
                  </li>
                  <li>
                    <a href="#">Scary TV Series</a>
                  </li>
                  <li>
                    <a href="#">Best 2021 Documentaries</a>
                  </li>
                  <li>
                    <a href="#">Crime TV</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul className={list}>
                  <li>
                    <a href="#">Reality TV Shows</a>
                  </li>
                  <li>
                    <a href="#">Cartoon</a>
                  </li>
                  <li>
                    <a href="#">TV News</a>
                  </li>
                  <li>
                    <a href="#">Fantacy</a>
                  </li>
                  <li>
                    <a href="#">Romance</a>
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
                <a href="#">
                  <FacebookIcon />
                </a>

                <a href="#">
                  <TwitterIcon />
                </a>

                <a href="#">
                  <InstagramIcon />
                </a>

                <a href="#">
                  <YouTubeIcon />
                </a>
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
