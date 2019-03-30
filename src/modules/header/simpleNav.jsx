import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TablePagination from "@material-ui/core/TablePagination";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePage } from "../../actions/apiActions";

const styles = {
  root: {
    flexGrow: 1
  }
};

class SimpleAppBar extends Component {
  checkForUpdates = () => {
    // console.log("callback");
  };

  handleChangePage = (event, page) => {
    // console.log("evetn:", event, page);
    this.props.changePage(page, this.checkForUpdates);
  };

  render() {
    const { classes, page, total_results } = this.props;

    return (
      <div className={classes.root} style={{ textAlign: "center" }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <TablePagination
                rowsPerPageOptions={[]}
                colSpan={10}
                count={total_results}
                rowsPerPage={20}
                page={page}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.handleChangePage}
                //   onChangeRowsPerPage={this.handleChangeRowsPerPage}
                //   ActionsComponent={}
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.main
  };
};

const mapDispatchToProps = dispatch => ({
  changePage: (page, callback) =>
    dispatch(changePage(page)).then(() => callback())
});

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(SimpleAppBar))
);
