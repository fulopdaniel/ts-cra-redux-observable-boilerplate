import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomeContainer from "./components/home/HomeContainer";

const AppWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppWrapper;
