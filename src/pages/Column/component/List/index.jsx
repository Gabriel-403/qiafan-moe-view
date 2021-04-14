import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { List, Avatar, Space } from 'antd';
import Topbar from "../../../HomePage/components/Topbar/index.jsx"
import React from 'react';
import "./index.scss"

export default class ListBox extends React.Component {

  state = {

  }

  render() {
    const str = "Ant Design, a design language for background applications, is refined by Ant UED Team."
    const listData = [];
    listData.push({
      href: 'https://ant.design',
      title: `ant design part `,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        str.substring(0, 20) + "...",
    });
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
          dataSource={listData}
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
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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