import React from "react"

import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MangerPage from "../pages/ManagePage"



function router() {
    return (
        <Router>
            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={Login} />
            <Router path="/ManagePage" component={MangerPage} />
        </Router>);
}

export default router;