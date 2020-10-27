import { Divider } from 'antd';
import React, { Component } from 'react';
import "./index.scss"

class Stuff extends Component {
render(){
  return(<div class="stuff">

<Divider><h1>组长</h1></Divider>
<Divider orientation="left"><h1>汉化</h1></Divider>
<Divider orientation="right"><h1>润色</h1></Divider>
<Divider orientation="left"><h1>校对</h1></Divider>

    
  </div>)
}



}
export default Stuff