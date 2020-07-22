import { Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import React from "react"

export default function RouterConfig() {
    return ({ history }) => <Router history={history} >
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>
}
