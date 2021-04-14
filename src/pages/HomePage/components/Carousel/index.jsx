import React from "react"
import { Carousel } from 'antd';
import img from "../../../../assets/img/f96020a07eee1760bc0b766a81df4675.png"

import './index.scss'
export default class HomeCarousel extends React.Component {

  render() {
    return (
      <div className="box-carousel">
        <section className="home-carousel">
          <Carousel autoplay >
            <div className="carouselimg">
              <img src={img} alt=""/>
            </div>
          </Carousel>
        </section>
      </div>
    )


  }




}
