import React from "react"
import Topbar from "./components/Topbar"
import Headbar from "./components/Headbar"
import HomeCarousel from "./components/Carousel"

export default class Homepage extends React.Component {

  render() {
    return (
      <div>
        <Topbar></Topbar>
        <Headbar></Headbar>
        <HomeCarousel></HomeCarousel>
      </div>
    );
  }
}