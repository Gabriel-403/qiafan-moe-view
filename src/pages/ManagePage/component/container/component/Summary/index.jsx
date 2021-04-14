/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd';
import { WarningTwoTone ,ExperimentTwoTone,FileUnknownTwoTone ,PieChartTwoTone    } from '@ant-design/icons';
import "./index.scss"
import { RadialBarChart, RadialBar, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed', },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1', },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d', },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c', },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57', },
  { name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658', },
];

const linedata = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

class Summary extends React.Component {

  state = {}

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
              <h1>10</h1>      
            </div>
            <ExperimentTwoTone   style={{ fontSize: 80 }} ></ExperimentTwoTone>
          </Card>
          <Card style={{ width: 300, height: 150 }}
            hoverable="true" >
            <div>
              <h2>剩余文本</h2>
              <h1>20</h1>    
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
              <h1>2%</h1> 
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
