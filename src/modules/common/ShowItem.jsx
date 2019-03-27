import React from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "../common/movieCard";

const ShowItem = props => {
  return (
    <Grid item lg={3} xs={12}>
      <MovieCard element={props.element} />
    </Grid>
  );
};

export default ShowItem;
