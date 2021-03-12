import React from "react"
import Topbar from "./components/Topbar"
import Headbar from "./components/Headbar"
import HomeCarousel from "./components/Carousel"
import Card from "./components/Card"
import "./index.scss"

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Topbar></Topbar>
        <Headbar></Headbar>
        <Card></Card>
        <HomeCarousel></HomeCarousel>
      </div>
    );
  }
}