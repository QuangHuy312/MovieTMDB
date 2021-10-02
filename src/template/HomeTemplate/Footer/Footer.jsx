import { Container, Grid, List, ListItem, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./style";

const Footer = () => {
  const { content, title, list } = useStyle();
  return (
    <div className={content}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className={title}>
              Movie Categories
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <List className={list}>
                  <ListItem>
                    <NavLink to="/">Action</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Adventure</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Animation</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Comedy</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Crime</NavLink>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <List className={list}>
                  <ListItem>
                    <NavLink to="/">Drama</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Fantacy</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Horror</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Mystrey</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Romance</NavLink>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={title}>
              TV Show Categories
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <List className={list}>
                  <ListItem>
                    <NavLink to="/">Valentine Day</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Comedies</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Scary TV Series</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Best 2021 Documentaries</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Crime TV</NavLink>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6}>
                <List className={list}>
                  <ListItem>
                    <NavLink to="/">Reality TV Shows</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Cartoon</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">TV News</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Fantacy</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink to="/">Romance</NavLink>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
            <div>
              <Typography variant="h6" className={title}>
                Contact with me
              </Typography>
              <List conponent="nav" style={{ display: "flex" }}>
                <ListItem>
                  <a href="https://www.facebook.com/huy.buidinhquanghuy">
                    <FacebookIcon style={{ color: "#fff" }} />
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://www.instagram.com/huyquang0312">
                    <InstagramIcon style={{ color: "#e7663d" }} />
                  </a>
                </ListItem>
              </List>
            </div>
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
