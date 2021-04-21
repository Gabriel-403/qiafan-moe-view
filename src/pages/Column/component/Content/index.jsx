import React from 'react';
import "./index.scss";
import Topbar from "../../../HomePage/components/Topbar/index.jsx";
import { Affix, Avatar, Calendar } from 'antd';
import axios from "axios"



export default class ColumnContent extends React.Component {


  state = {
    data: {}
  }

  componentDidMount() {
    let id = this.props.match.params.id
    axios.get("https://localhost:5000/api/post/?id=" + id).then((res) => {
      var d = new Date(res.data.createTime);
      var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      let list =
      {
        title: res.data.title,
        avatar: res.data.comment,
        description: datetime,
        content: res.data.content
        //content: res.data.content.substring(0, 20) + "...",
      }
      this.setState({ data: list })
      console.log(this.state.data.avatar)
    })

  }
  render() {
    return (<div className="ColumnBackground">
      <Topbar></Topbar>
      <div className="ConnentColumn">
        <div className="ColumnBox">
          <h1>{this.state.data.title}</h1>
          <h2>{ this.state.data.description}</h2>
          <h3>{this.state.data.content}</h3>
          <center> <img
            width={600}
            alt="logo"
            src={this.state.data.avatar}
          /> </center>  
        </div>
            <div className="AboutBox"><Affix>
              <div className="AvatarBox">
                <Avatar
                  size={80}
                  src="https://camo.githubusercontent.com/c26f325fa8d482c5dfbc30be326e4ce27ac2ea70e1db3facf269bcb40de16a11/68747470733a2f2f73312e617831782e636f6d2f323032302f30392f30382f774d723373782e74682e6a7067"
                  alt="sagio"
                />
                <h2>sagio</h2>
                <div className="site-calendar-demo-card">
                  <Calendar fullscreen={false} />
                </div>
              </div>
            </Affix>
            </div>
      </div>
        </div>
    )
  }
}