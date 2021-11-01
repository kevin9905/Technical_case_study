import React from "react";
import MainPage from "./Components/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id" render={(props) => <MainPage {...props} />} />
          <Route path="/" render={(props) => <MainPage {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
