import React from "react"
import imgURL from '../../../../assets/logo2.png';
import "./index.css";


export default class Homepage extends React.Component {


    render() {
        return (
                <header>
                    <img class="logo" src={imgURL} />
                    <a class="active-item" >首页</a>
                    <a class="active-item2">专栏</a>
                    <a class="active-item2" href="//sinochem-group-fontend.oss-cn-qingdao.aliyuncs.com">汉化组管理</a>
                </header>

        )
    }
}