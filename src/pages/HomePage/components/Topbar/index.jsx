/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import imgURL from '../../../../assets/img/logo2.png';
import "./index.scss";


export default class Homepage extends React.Component {


  render() {
    return (<div className="home-page">
      <header>
      <img class="logo" src={imgURL} alt="image" />
      <a class="active-item" >首页</a>
      <a class="active-item2">专栏</a>
      <a class="active-item2" href="/#/login">汉化组管理</a>
    </header> 
    </div>

    )
  }
}