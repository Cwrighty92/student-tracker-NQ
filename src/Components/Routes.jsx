import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
    </Switch>
  );
};
