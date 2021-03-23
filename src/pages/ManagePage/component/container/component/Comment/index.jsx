import React from 'react';
import { Comment, Avatar, Form, Button, List, Input ,Image} from 'antd';
import moment from 'moment';
import axios from 'axios';
import "./index.scss";



const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发表
        </Button>
    </Form.Item>
  </>
);

export default class Commention extends React.Component {
  state = {
    username: "",
    comments: [],
    submitting: false,
    value: '',
  };

  componentDidMount() {
    axios.get("https://localhost:5000/api/myuser")
      .then((res) => {
        this.setState({ username: res.data.userName });
        ;
      })
      .catch(() => { console.error('error') })
    axios.get("https://localhost:5000/api/userMessage")
      .then((res) => {
        this.setState({ comments: res.data });
        ;
      })
      .catch(() => { console.error('error') })
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    let config = {
      headers: {
        "Content-Type": "x-www-form-urlencoded"
      }
    };

    setTimeout(() => {
      const fm = new FormData();
      fm.append("content", this.state.value);
      axios.post("https://localhost:5000/api/userMessage", fm, config)
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: this.state.username,
            avatar: <Image src="https://camo.githubusercontent.com/c26f325fa8d482c5dfbc30be326e4ce27ac2ea70e1db3facf269bcb40de16a11/68747470733a2f2f73312e617831782e636f6d2f323032302f30392f30382f774d723373782e74682e6a7067" />,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
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

    return (<div className="comment">  <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
         src="https://camo.githubusercontent.com/c26f325fa8d482c5dfbc30be326e4ce27ac2ea70e1db3facf269bcb40de16a11/68747470733a2f2f73312e617831782e636f6d2f323032302f30392f30382f774d723373782e74682e6a7067"
            alt="sagio"
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
    </></div>

    );
  }
}

