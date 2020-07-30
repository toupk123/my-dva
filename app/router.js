import { Router, Switch, Route ,HashRouter} from "react-router-dom";
import App from "./routes";
import React from "react";
import CreateTask from "./routes/CreateTask";
import './app.css';


Router.render = function(){
    console.log(this)
 
}
console.log(Router,React.createElement(HashRouter))


export default function RouterConfig({ history }) {

    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={()=>3} />
          <Route path="/ss" exact component={()=>12} />
        </Switch>
      </Router>
    );
  }
