import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "../common/movieCard";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setFilter, toggleMenu } from "../../actions/headerActions";
import { getMovies } from "../../actions/apiActions";
import ShowItem from "../common/ShowItem";
class Dashboard extends Component {
  render() {
    const { results } = this.props;
    return (
      <div style={{ flexGrow: 1, margin: "20px" }}>
        <Grid container spacing={24}>
          {this.props.results &&
            results.map(el => {
              return <ShowItem element={el} />;
            })}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.main
  };
};

const mapDispatchToProps = {
  setFilter,
  toggleMenu,
  getMovies
};

// export default withStyles(styles)(Header);/
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
