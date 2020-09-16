import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Avatar } from 'antd';
import { Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./index.scss"

import "../../../../assets/img/logo2.png"

export default class MangeHeader extends Component {
  render() {
    return (<div class="managetitle">
       <PageHeader
      className="site-page-header"
      title="恰饭萌"
      subTitle="This is a subtitle"
      ghost="true"
      extra={[<Avatar size="large" icon={<UserOutlined />}/>]}></PageHeader></div>
    );
  }
}

