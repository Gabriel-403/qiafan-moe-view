import React from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import MangerPage from "../pages/ManagePage";


function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/manage" component={MangerPage}/> 
        <Redirect to="/homepage"></Redirect>
      </Switch>
    </Router>
  );
}


export default router;