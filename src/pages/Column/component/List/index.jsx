import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { List, Avatar, Space } from 'antd';
import Topbar from "../../../HomePage/components/Topbar/index.jsx"
import React from 'react';
import "./index.scss"
import axios from 'axios';

export default class ListBox extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get("https://localhost:5000/api/posts").then((res) => {
      var Listdata = [];
      for (let i = 0; i < res.data.length; i++) {
        Listdata.push(
          {
            href: "http://localhost:3000/#/connentcolumn/"+res.data[i].id,
            title: res.data[i].title,
            avatar: res.data[i].comment,
            description: res.data[i].createTime,
            content:res.data[i].content.substring(0, 120) + "..."
            //content: res.data.content.substring(0, 20) + "...",
          }
        )
      }
      this.setState({ data: Listdata})
      console.log(this.state.data)

    })

  }

  render() {
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );

    return (<div className="ListBox">
      <Topbar></Topbar>
      <div className="ListContect">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.state.data}
          footer={
            <div>
              <b>ant design</b> footer part
      </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={item.avatar}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>);

  }
}