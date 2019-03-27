import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SwipeableTemporaryDrawer from "./modules/common/sideMenu";
import MovieCard from "./modules/common/movieCard";
import Home from "./modules/home/home";
import SearchAppBar from "./modules/common/AppBar";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* <SearchAppBar /> */}
          {/* <SwipeableTemporaryDrawer /> */}
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
