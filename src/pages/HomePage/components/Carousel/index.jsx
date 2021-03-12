import React from "react"
import { Carousel } from 'antd';

import './index.scss'
export default class HomeCarousel extends React.Component {

  render() {
    return (
      <div className="box-carousel">
        <section className="home-carousel">
          <Carousel autoplay >
            <div >
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </section>
      </div>
    )


  }




}
