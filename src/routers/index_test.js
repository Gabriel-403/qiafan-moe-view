import React from "react"
import { Route } from "react-router-dom"

import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import MangerPage from "../pages/ManagePage"

const router = [{
    path: '/homepage',
    component: <HomePage />
}]