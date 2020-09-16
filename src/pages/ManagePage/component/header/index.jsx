import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "./index.scss"

import "../../../../assets/img/logo2.png"

export default class MangeHeader extends Component {
  render() {
    return (<div class="managetitle">
      <PageHeader
        className="site-page-header"
        title="恰饭萌"
        subTitle="恰饭萌信息管理系统"
        ghost="true"
        extra={[<div class="icontag">
          <div >555</div>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>]}>
      </PageHeader>
    </div>
    );
  }
}

