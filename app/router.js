import { Router, Switch, Route, HashRouter } from "react-router-dom";
import App from "./routes";
import React from "react";
import CreateTask from "./routes/CreateTask";
import './app.css';


export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/createTask" exact component={CreateTask} />
      </Switch>
    </Router>
  );
}
