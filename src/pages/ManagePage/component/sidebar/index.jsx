import React, { Component } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

import './index.scss';

const { SubMenu } = Menu;

export default class MangeSiderbar extends Component {
  render() {
    return (
      <div className="sidebar">

        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>信息系统</span>
              </span>
            }
          >

            <Menu.Item key="1"><Link to="/manage/summary">汉化概述</Link></Menu.Item>
            <Menu.Item key="2">人员概况</Menu.Item>
            <Menu.Item key="3">留言墙</Menu.Item>
            <Menu.Item key="4">作品列表</Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="文件系统">
            <Menu.Item key="5">
              <Link to="/manage/cultural">翻译</Link>
            </Menu.Item>
            <Menu.Item key="6">校对</Menu.Item>

            <Menu.Item key="7">测试</Menu.Item>


          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>管理系统</span>
              </span>
            }
          >
            <Menu.Item key="9">权限管理</Menu.Item>
            <Menu.Item key="10">职务管理</Menu.Item>
            <Menu.Item key="11">消息中心</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}




