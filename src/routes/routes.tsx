import React, { FC } from "react";
import { createBrowserHistory } from "history";
export const BrowserHistory = createBrowserHistory();

import { Switch, Route, Router } from "react-router-dom";

import Home from "../shared/containers/Home";

//Need to abstract this away
const path = (/#!(\/.*)$/.exec(window.location.href) || [])[1];
if (path) {
  BrowserHistory.replace(path);
}

interface Props {}
const Routes: FC<Props> = () => {
  return (
    <Router history={BrowserHistory}>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route>404: Page not found</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
