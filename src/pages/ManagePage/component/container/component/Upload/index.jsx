import React from 'react'
import { Input } from 'antd';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./index.scss";
import axios from "axios";



export default class Uploads extends React.Component {
  
  state = { text: "" }
  onChanges = (e) => {
 
    this.setState({ text:e.target.value})
  }
  onsubmit=()=>{
    axios.post("https://localhost:5000/api/fileinfos")
      .then((res) => {
        this.setState({
          data: res.data
        });
      })
      .catch(() => { console.error('error') })
  }
  Upload = (e) => {
    alert(e);
    const { files } = e.target;
    const file = files[0];

    const fm = new FormData();
    fm.append("File", file);
    fm.append('fileName', file.name);
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    axios.post('', fm, config).then(() => {
  
    })
      ;
  }
  render() {
  
    const { TextArea } = Input;
    const Uploader = () => {
      const props = {
        beforeUpload: file => {
          if (file.type !== 'image/jpg'||"image/png") {
            message.error(`${file.name} 图片格式错误`);
          }
          return file.type === 'image/png' ? true :(file)=e=>this.Upload(e);
        },
        onChange: info => {
          console.log(info.fileList);
        },
      };
      return (
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>上传图片</Button>
        </Upload>
      );
    };

    return (<div><div className="post">
      <Uploader />
      <Button onClick={this.onsubmit}>提交</Button>
    </div>
      <br />
      <div className="text">
        <TextArea rows={15} onChange={this.onChanges}/>
      </div>
    </div>)
  }

}