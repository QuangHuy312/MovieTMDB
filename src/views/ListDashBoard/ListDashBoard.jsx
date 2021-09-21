import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useStyle from "./style";
import BACKDROP from "../../assets/img_no_background.png";
import { useHistory } from "react-router";

const ListDashBoard = ({ infoUser }) => {
  const { content, title, contentCard, imgCard, textCard, btnCreateList } =
    useStyle();
  const { arrCreatedList } = useSelector(
    (state) => state.DashBoardManagerReducer
  );
  const history = useHistory();
  return (
    <Container className={content}>
      <div className={title}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          My lists
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={btnCreateList}
          onClick={() => history.push(`/${infoUser.username}/list/new`)}
        >
          Create List
        </Button>
      </div>

      <Grid container spacing={3}>
        {arrCreatedList?.map((list) => {
          return (
            <Grid item xs={6} key={list.id}>
              <Card className={contentCard}>
                <CardMedia image={BACKDROP} className={imgCard} />
                <CardContent>
                  <div className={textCard}>
                    <Typography
                      variant="h5"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        history.push(`/${infoUser.username}/list/${list.id}`)
                      }
                    >
                      {list.name}
                    </Typography>

                    <Typography variant="h4">
                      {list.item_count} items
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListDashBoard;
