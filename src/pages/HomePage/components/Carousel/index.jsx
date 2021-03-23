import React from "react"
import { Carousel } from 'antd';

import './index.scss'
export default class HomeCarousel extends React.Component {

  render() {
    return (
      <div className="box-carousel">
        <section className="home-carousel">
          <Carousel autoplay >
            <div className="carouselimg">
              <img src=" http://chuantu.xyz/t6/741/1616183539x-1404791174.jpg" alt=""/>
            </div>
    
          </Carousel>
        </section>
      </div>
    )


  }




}
