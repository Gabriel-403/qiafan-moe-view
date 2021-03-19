import { Table, Tag, Space } from 'antd';
import React from "react";
import "./index.scss";
import axios from "axios";

export default class RoleManage extends React.Component {

  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("https://localhost:5000/api/users")
      .then((res) => {
        console.debug(res)
        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })
  };
  render() {
    const columns = [
      {
        title: '用户',
        dataIndex: 'name',
        key: 'name',
        render: text => (<a href>{text}</a>),
      },
      {
        title: '职责',
        dataIndex: 'role',
        key: 'age',
      },
      {
        title: '描述负责部分',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
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
            <a href>翻译</a>
            <a href>测试</a>
            <a href>校对 </a>
            
          </Space>
        ),
      },
      {
        title: '用户操作',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a href>删除用户</a>
            <a href>重置密码</a>
          </Space>
        ),
      }
    ];
    
    const data = [
      {
        key: '1',
        name: '狗',
        role: 32, 
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        role: 42,
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        role: 32,    
        tags: ['cool', '？'],
      },
    ];
    return (
      <div className="rolemanage"> <Table columns={columns} dataSource={data} /></div>
    )

  }

}
