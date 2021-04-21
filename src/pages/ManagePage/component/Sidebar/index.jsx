import React, { Component } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined ,GithubOutlined ,SendOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

import './index.scss';

const { SubMenu } = Menu;

export default class MangeSidebar extends Component {
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
            <Menu.Item key="2"><Link to="/manage/uploads">作品推荐（专栏）</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/manage/comment">留言墙</Link></Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="文件系统">
            <Menu.Item key="5">
              <Link to="/manage/translation">翻译</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/manage/profreading">校对</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/manage/test">测试</Link>
            </Menu.Item>
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
            <Menu.Item key="9"><Link to="/manage/taskmanage">任务管理</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/manage/rolemanage">职务管理</Link></Menu.Item>
            <Menu.Item key="12"><Link to="/manage/register">注册用户</Link></Menu.Item>

          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
               <SendOutlined />
                <span>跳转链接</span>
              </span>
            }
          >
            <Menu.Item key="4"><Link to="/column">访问专栏</Link></Menu.Item>
            <Menu.Item key="13"><Link to="/homepage">返回首页</Link></Menu.Item>
            <Menu.Item key="14"><Link to="/homepage">重新登录</Link></Menu.Item>
            <Menu.Item key="15"><a href="https://github.com/Gabriel-403/qiafan-moe-view"><GithubOutlined />代码仓库</a></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}




