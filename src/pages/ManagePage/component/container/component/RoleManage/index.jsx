import { Table, Tag, Space } from 'antd';
import React from "react";
import "./index.scss";
import axios from "axios";

export default class RoleManage extends React.Component {

  state = {};

  componentDidMount() {
    axios.get("https://localhost:5000/api/users")
      .then((res) => {
        console.debug(res.data)
        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })
  };
  refresh() {
    axios.get("https://localhost:5000/api/users")
      .then((res) => {
        console.debug(res.data)
        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })
  };
  DeleteRole = (user, role) => {

    axios.delete('https://localhost:5000/api/role/?username=' + user + "&rolename=" + role)
      .then((res) => {
        alert("删除成功")
        this.refresh()
      }).catch((res) => {
        alert(res)
      });
  }
  ChangeRole = (user, role, newRole) => {

    axios.put('https://localhost:5000/api/role/?username=' + user + "&oldrolename=" + role + '&rolename=' + newRole)
      .then((res) => {
        alert("更改权限成功")
        this.refresh()
      }).catch((res) => {
        alert(res)
      });
  }
  DeleteUser = (user, role, newRole) => {
    axios.delete('https://localhost:5000/api/user/?username=' + user + "&rolename=" + role)
      .then((res) => {
        alert("删除用户成功")
        this.refresh()
      }).catch((res) => {
        alert(res)
      });
  }
  render() {
    const columns = [
      {
        title: '用户',
        dataIndex: 'user',
        key: 'user',
        render: text => (<a href>{text}</a>),
      },
      {
        title: '登陆状态',
        dataIndex: 'islogin',
        key: 'islogin',
      },
      {
        title: ' 职责',
        key: 'roles',
        dataIndex: 'roles',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = (tag ==="Translation" ?'geekblue':tag === "Test"? 'cyan' : tag=== "Proofreading"? 'purple' : 'green');
              if (tag === 'admin') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: '职务变更',
        key: 'change',
        render: (text, record) => (
          <Space size="middle">
            <a href onClick={() => this.ChangeRole(record.user, record.roles, "Translation")}>翻译</a>
            <a href onClick={() => this.ChangeRole(record.user, record.roles, "Test")}>测试</a>
            <a href onClick={() => this.ChangeRole(record.user, record.roles, "Proofreading")}>校对 </a>

          </Space>
        ),
      },
      {
        title: '用户操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a href onClick={() => this.DeleteUser(record.user, record.roles)}>删除用户</a>
            <a href onClick={() => this.ChangeRole(record.user, record.roles, "Audience")}>删除权限</a>
            <a href>重置密码</a>
          </Space>
        ),
      }
    ];

    const data = this.state.data
    return (
      <div className="rolemanage"> <Table columns={columns} dataSource={data} /></div>
    )

  }

}
