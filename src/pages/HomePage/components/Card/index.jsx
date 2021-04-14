import React from 'react';
import img from "../../../../assets/img/f96020a07eee1760bc0b766a81df4675.png"

import "./index.scss"

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <image
          src={img} alt=""
        />

      </div>
    )
  }
}