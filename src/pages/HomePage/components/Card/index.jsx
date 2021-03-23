import React from 'react';
import { Image } from "antd"
import "./index.scss"

export default class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <Image
          width={500}
          height={280}
          src="error"
          fallback="http://chuantu.xyz/t6/741/1616183091x-591243120.jpg"
        />
        <Image
          width={500}
          height={280}
          src="error"
          fallback="http://chuantu.xyz/t6/741/1616183175x1700340449.jpg"
        />
        <Image
          width={500}
          height={280}
          src="../../../../assets/img/f96020a07eee1760bc0b766a81df4675.png"
          fallback="http://chuantu.xyz/t6/741/1616183282x1700340450.jpg"
        />
      </div>
    )
  }
}