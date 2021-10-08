import { Container, Grid } from "@material-ui/core";
import queryString from "query-string";
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import CatalogList from "../CatalogList/CatalogList";
import ItemsList from "../ItemsList/ItemsList";
import GenreMovie from "./GenreMovie/GenreMovie";
import useStyle from "./style";

const DetailMovieList = ({
  arrGenresMovieList,
  arrMovieList,
  queryparams,
  page,
  loading,
  setLoading,
}) => {
  const history = useHistory();
  const [genre, setGenre] = React.useState("");
  const [genreId, setGenreId] = React.useState("");
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    const genreId = arrGenresMovieList?.find((genreList) => {
      if (genreList.name === event.target.value) {
        return genreList;
      }
    })?.id;

    setGenreId(genreId);
  };
  const handlePageChange = (e, page) => {
    setLoading(true);
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
          <CatalogList
            queryparams={queryparams}
            genreId={genreId}
            setLoading={setLoading}
          />
        </Grid>
      </Container>

      <ItemsList
        arrList={arrMovieList}
        handlePageChange={handlePageChange}
        arrGenresList={arrGenresMovieList}
        page={page}
        loading={loading}
      />
    </Fragment>
  );
};

export default DetailMovieList;
