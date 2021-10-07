import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const GenreMovie = ({ genre, handleChangeGenre }) => {
  const classes = makeStyles(() => {
    return {
      formControl: {
        minWidth: 100,
        color: "#fff",
        marginBottom: 20,
      },
    };
  });
  return (
    <Grid item xs={6} sm={4} lg={2}>
      <Typography variant="body2">GENRE :</Typography>
      <FormControl className={classes.formControl}>
        <Select
          displayEmpty
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          onChange={handleChangeGenre}
          style={{ color: "#f9ab00" }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Action</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Horror">Horror</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default GenreMovie;
