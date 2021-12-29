import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MyTitle from "./components/MyTitle";
import Mystate from "./components/Mystate";
import MyTitle3 from "./components/MyTitle3";
import Lifecircle from "./components/lifecircle";
import Recharts from "./components/Recharts";
import Test from "./components/Test";
console.log(App());
const rootElement = document.getElementById("root");
ReactDOM.render(
  // render接收2个参数，第一个为虚拟DOM，第二个为真实DOM，即要将虚拟DOM挂载到真实的DOM中
  <StrictMode>
    <App></App>
    <Recharts />
    {/* 在这里通过自定义属性向Mytitle传参 */}
    <MyTitle title="这里是自定义内容" color="blue" />
    <Mystate />
    <MyTitle3 />
    {/* 问题：如何在父组件中调用子组件的方法呢》这里这样写没法调用 */}
    <div onClick={MyTitle3.fun}>这是父级的内容</div>
    <Lifecircle />
    <Test name="测试" />
  </StrictMode>,
  rootElement
);
