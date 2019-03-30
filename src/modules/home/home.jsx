import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../notFound/NotFound";
import Dashboard from "../dashboard/Dashboard";
import ViewMovie from "../viewMovie/ViewMovie";
import Header from "../header/Header";
import SimpleAppBar from "../header/simpleNav";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SimpleAppBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/movie/:id" component={ViewMovie} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
