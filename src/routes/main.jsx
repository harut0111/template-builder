import Main from "../components/Main";
import MainLayout from "../layouts/MainLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={"/"} component={Main} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default Routes;
