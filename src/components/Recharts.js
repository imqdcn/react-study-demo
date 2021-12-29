import React from "react";
// const {LineChart, Line, XAxis, YAxis, CartesianGrid} = Recharts;
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
// 如果不是定义状态，而是定义变量，则不要在组件内，即React.Component中写
// 在这里定义的变量，要使用时，直接是{变量名}
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];

export default class Rechart extends React.Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      loadding: true
    };
  }

  render() {
    return (
      <div>
        <LineChart width={1000} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#f40" />
        </LineChart>
      </div>
    );
  }
}
