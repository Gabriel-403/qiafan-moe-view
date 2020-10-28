/* eslint-disable no-unused-vars */
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import Item from 'antd/lib/list/Item';
import moment from 'moment';
import React, { Component } from 'react';
import "./index.scss"

const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);
const CommentList = ({ comments }) => (
  <List
    dataSource={comments} 
    itemLayout="horizontal"
    header={comments.length} 
    renderItem={props => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{props.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);


class Stuff extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            title: "as",
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };


  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  render() {
    const { comments, submitting, value } = this.state;
    return (<div class="stuff">


      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    </div>)
  }






}
export default Stuff