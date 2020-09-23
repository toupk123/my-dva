import { Router, Switch, Route } from "react-router-dom";
import App from "./routes";
import React from "react";
import CreateTask from "./routes/CreateTask";
import './app.css';
import Test from "./test.tsx"

export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Test} />
        <Route path="/createTask" exact component={CreateTask} />
      </Switch>
    </Router>
  );
}
