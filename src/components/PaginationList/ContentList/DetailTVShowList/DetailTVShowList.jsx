import { Container, Grid } from "@material-ui/core";
import queryString from "query-string";
import React, { Fragment } from "react";
import { useHistory } from "react-router";
import CatalogList from "../CatalogList/CatalogList";
import ItemsList from "../ItemsList/ItemsList";
import GenreTVShow from "./GenreTVShow/GenreTVShow";
import useStyle from "./style";

const DetailTVShowList = ({
  arrGenresTVShowList,
  arrTVShowList,
  queryparams,
  page,
  setLoading,
  loading,
}) => {
  const history = useHistory();
  const [genre, setGenre] = React.useState("");
  const [genreId, setGenreId] = React.useState("");
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    const genreId = arrGenresTVShowList?.find((genreList) => {
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
          <GenreTVShow genre={genre} handleChangeGenre={handleChangeGenre} />
          <CatalogList
            queryparams={queryparams}
            genreId={genreId}
            setLoading={setLoading}
          />
        </Grid>
      </Container>

      <ItemsList
        arrList={arrTVShowList}
        handlePageChange={handlePageChange}
        arrGenresList={arrGenresTVShowList}
        page={page}
        loading={loading}
      />
    </Fragment>
  );
};

export default DetailTVShowList;
