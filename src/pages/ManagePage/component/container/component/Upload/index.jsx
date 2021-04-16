import React from 'react'
import { Input } from 'antd';
import { Upload, Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./index.scss";
import axios from "axios";

export default class Uploads extends React.Component {


  state = {title:"", text: "", url: "" }
  
  titleonChanges = (e) => {

    this.setState({title: e.target.value })
    
  }
  onChanges = (e) => {
    this.setState({ text: e.target.value })
  }
  onsubmit = () => {
    const fm = new FormData();
    alert(this.state.title)
    let title=this.state.title;
    let content=this.state.text;
    var mycars=new Array()
    mycars[0]=this.state.url
    fm.append('Title', title);
    fm.append('Content', content);
    fm.append("Comment",mycars)
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    axios.post("https://localhost:5000/api/post",fm,config)
      .then((res) => {alert("上传成功")
        ;
      })
      .catch(() => { alert("提交失败") })
  }
  Upload = (e) => {
    const file = e;
    const fm = new FormData();
    fm.append("File", file);
    fm.append('fileName', file.name);
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    axios.post('https://localhost:5000/api/post/picture', fm, config).then((res) => {
      console.log(res);
      this.setState({
        url: res.data.picture_url
      })
      alert("上传成功")
    }).catch((res) => {
      alert("上传失败")
    });
  }
  render() {

    const { TextArea } = Input;
    const Uploader = () => {
      const props = {
        beforeUpload: file => {
          this.Upload(file);
        },
        onChange: info => {
          console.log(info.fileList);
        },
      };
      return (
        <Upload {...props} listType="picture">
          <Button icon={<UploadOutlined />}>上传图片</Button>
        </Upload>
      );
    };

    return (<div><div className="post">
      <Uploader />
      <Button onClick={this.onsubmit}>提交</Button>
    </div>
      <div className="text">
        题目：<TextArea rows={1} onChange={this.titleonChanges} />
        <br />
        <br />
        <TextArea rows={15} onChange={this.onChanges} />
      </div>
    </div>)
  }

}