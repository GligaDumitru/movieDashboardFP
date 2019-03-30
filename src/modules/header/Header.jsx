import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setFilter, toggleMenu } from "../../actions/headerActions";
import { getMovies } from "../../actions/apiActions";
import SwipeableTemporaryDrawer from "../common/sideMenu";
import SimpleSelect from "../common/editItemsNumber";
import {
  createMovieUrl,
  getTopMovies,
  searchMovies
} from "../../services/index";

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 12,
    transition: theme.transitions.create("width"),
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

class Header extends Component {
  
  componentDidMount() {
    let url = getTopMovies();
    this.props.getMovies(url);
  }
  handleOnChange = e => {
    let url = searchMovies({ page: 3, query: e.target.value });
    this.props.getMovies(url);
    console.log(e.target.value);
    this.props.setFilter(e.target.value, e.target.id);
  };
  render() {
    const { classes, nameMovieValue, toggleMenu, showMenu } = this.props;
    console.log(this.props);
    return (
      <div className={classes.root}>
        {/* {JSON.stringify(this.props.results)} */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={() => toggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Movie Dashboard
            </Typography>
            {/* <div
              className="selectNumberOfElement"
              style={{ background: "#fff", margin: "0 20px" }}
            >
              <SimpleSelect />
            </div> */}

            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search ..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                onChange={this.handleOnChange}
                id="nameMovie"
                value={nameMovieValue || ""}
              />
            </div>
          </Toolbar>
        </AppBar>
        <SwipeableTemporaryDrawer show={showMenu} hide={toggleMenu} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

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
  )(withStyles(styles)(Header))
);
