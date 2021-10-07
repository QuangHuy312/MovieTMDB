import { Container, Grid } from "@material-ui/core";
import queryString from "query-string";
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import CatalogList from "../CatalogList/CatalogList";
import ItemsList from "../ItemsList/ItemsList";
import GenreMovie from "./GenreMovie/GenreMovie";
import useStyle from "./style";

const MovieList = ({ arrGenresMovieList, arrMovieList, queryparams, page }) => {
  const history = useHistory();
  const [genre, setGenre] = React.useState("");
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    const filters = {
      ...queryparams,
      genre: arrGenresMovieList?.find((genreList) => {
        if (genreList.name === event.target.value) {
          return genreList;
        }
      })?.id,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };
  const handlePageChange = (e, page) => {
    const filters = {
      ...queryparams,
      page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const { content } = useStyle();

  return (
    <Fragment>
      <Container maxWidth="xl" className={content}>
        <Grid container>
          <GenreMovie genre={genre} handleChangeGenre={handleChangeGenre} />
          <CatalogList queryparams={queryparams} />
        </Grid>
      </Container>

      <ItemsList
        arrList={arrMovieList}
        handlePageChange={handlePageChange}
        arrGenresList={arrGenresMovieList}
        page={page}
      />
    </Fragment>
  );
};

export default MovieList;
