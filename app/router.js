import { Router, Switch, Route } from "react-router-dom";
import App from "./routes"
import React from "react"
import './app.css'

export default function RouterConfig() {
    return ({ history }) => <Router history={history} >
        <Switch>
            <Route path="/" exact component={App} />
        </Switch>
    </Router>
}
