import React from "react"
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import MangerPage from "../pages/ManagePage";
import ListBox from "../pages/Column/component/List";
import ConnentColumn from "../pages/Column/component/Content"



function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route path="/manage" component={MangerPage}></Route>
        <Route path="/column" component={ListBox}></Route>
        <Route path="/connentcolumn" component={ConnentColumn}></Route>
       
        <Redirect to="/homepage"></Redirect>
      </Switch>
    </Router>
  );
}


export default router;