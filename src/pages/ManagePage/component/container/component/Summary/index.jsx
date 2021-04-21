/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd';
import { WarningTwoTone, ExperimentTwoTone, FileUnknownTwoTone, PieChartTwoTone } from '@ant-design/icons';
import "./index.scss"
import { RadialBarChart, RadialBar, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios"
const data = [
  { name: '4.7', uv: 0., pv: 3, fill: '#8884d8' },
  { name: '4.6', uv: 2, pv: 1, fill: '#83a6ed', },
  { name: '4.5', uv: 1., pv: 2, fill: '#8dd1e1', },
  { name: '4.4', uv: 8.22, pv: 2, fill: '#82ca9d', },
  { name: '4.3', uv: 8.63, pv: 2, fill: '#a4de6c', },
  { name: '4.2', uv: 2.63, pv: 0, fill: '#d0ed57', },
  { name: '4.1', uv: 6.67, pv: 2, fill: '#ffc658', },
];

const linedata = [
  { name: '4.11', uv: 5, pv: 5, amt: 2400, },
  { name: '4.12', uv: 5, pv: 2, amt: 2210, },
  { name: '4.13', uv: 5, pv: 5, amt: 2290, },
  { name: '4.14', uv: 5, pv: 2, amt: 2000, },
  { name: '4.15', uv: 5, pv: 2, amt: 2181, },
  { name: '4.16', uv: 5, pv: 1, amt: 2500, },
  { name: '4.17', uv: 5, pv: 0, amt: 2100, },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

class Summary extends React.Component {

  state = {
    content: {}
  }

  componentDidMount() {
    axios.get("https://localhost:5000/api/info")
      .then((res) => {
        console.debug(res.data)
        this.setState({
          content:res.data
        });
      })
      .catch(() => { console.error('error') })
  };
  render() {
    return (<div>
      <div class="summary">
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
          <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>

        <div class="cardbox">
          <Card style={{ width: 300, height: 150 }}
            hoverable="true" >
            <div>
              <h2>文本总数</h2>
              <h1>{this.state.content.count}</h1>
            </div>
            <ExperimentTwoTone style={{ fontSize: 80 }} ></ExperimentTwoTone>
          </Card>
          <Card style={{ width: 300, height: 150 }}
            hoverable="true" >
            <div>
              <h2>剩余文本</h2>
              <h1>{this.state.content.all}</h1>
            </div>
            <FileUnknownTwoTone style={{ fontSize: 80 }} ></FileUnknownTwoTone>
          </Card>
          <Card style={{ width: 300, height: 150 }}
            hoverable="true" >
            <div>
              <h2>最后期限</h2>
              <h1>9天</h1>
            </div>
            <WarningTwoTone style={{ fontSize: 80 }} ></WarningTwoTone>
          </Card>
          <Card style={{ width: 300, height: 150 }}
            hoverable="true" >
            <div>
              <h2>进度</h2>
              <h1>{this.state.content.per}</h1>
            </div>
            <PieChartTwoTone style={{ fontSize: 80 }} ></PieChartTwoTone>
          </Card>
        </div>
      </div>

      <LineChart
        width={1100}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
    )
  }
}


export default Summary;
