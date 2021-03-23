import React, { Component } from 'react';
import axios from 'axios';
import { PageHeader } from 'antd';
import { Avatar } from 'antd';
import "./index.scss"

import "../../../../assets/img/logo2.png"

export default class MangeHeader extends Component {
  state = {
    user:""
  };
  componentDidMount() {
      axios.get("https://localhost:5000/api/myuser")
        .then((res) => {
           this.setState({user:res.data.userName})
          ;
        })
        .catch(() => { console.error('error') })
    };
  render() {
    
    return (
      <div className="manage-title">
        <PageHeader
          className="site-page-header"
          title="恰饭萌"
          subTitle="恰饭萌信息管理系统"
          ghost="true"
          extra={
            <div class="icontag">
              <div className="username">欢迎回来，{this.state.user}！</div>
              <Avatar size="large" src="https://camo.githubusercontent.com/c26f325fa8d482c5dfbc30be326e4ce27ac2ea70e1db3facf269bcb40de16a11/68747470733a2f2f73312e617831782e636f6d2f323032302f30392f30382f774d723373782e74682e6a7067" />
            </div>
          }>
        </PageHeader>
      </div>
    );
  }
}

