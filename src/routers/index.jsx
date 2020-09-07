import React from "react"

import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import { BrowserRouter as Router, Route } from "react-router-dom"



function router() {
    return (
        <Router>
            <Route path="/homepage" component={HomePage} />
            <Route path="/index" component={Login} />
        </Router>);
}

export default router;