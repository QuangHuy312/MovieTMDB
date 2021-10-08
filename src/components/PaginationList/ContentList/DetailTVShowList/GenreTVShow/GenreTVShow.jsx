import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const GenreTVShow = ({ genre, handleChangeGenre }) => {
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
              return <em>Action & Adventure</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="Action & Adventure">Action & Adventure</MenuItem>
          <MenuItem value="War & Politics">War & Politics</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Documentary">Documentary</MenuItem>
          <MenuItem value="Kids">Kids</MenuItem>
          <MenuItem value="Family">Family</MenuItem>
          <MenuItem value="Talk">Talk</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default GenreTVShow;
