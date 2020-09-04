import React from "react"
import { Carousel } from 'element-react';

import "./index.css"



export default class HomeCarousel extends React.Component {

    render() {
        return (
          <div className="demo-4 medium">
            <Carousel interval="4000" type="card" height="200px">
              {
                [1,2,3,4,5,6].map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <h3>{item}</h3>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
        )
      }
      



    }
