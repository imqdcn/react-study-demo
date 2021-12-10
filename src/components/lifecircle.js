import React from "react";

export default class Lifecircle extends React.Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      word: "假数据"
    };
  }
  // react的生命周期函数大概有10个，但常用的如下：
  /*componentWillMount()：组件加载前调用(第17版移除)
  componentDidMount()：组件加载后调用-一般这里调用ajax-类似于mounted
  componentWillUpdate(): 组件更新前调用 -类似与beforeUpdated（(第17版移除)）
  componentDidUpdate(): 组件更新后调用-类似于updated
  componentWillUnmount()：组件卸载前调用
  componentWillReceiveProps()：组件接受新的参数时调用 
  在这里测试下，跟vue的生命周期函数用法差不多
  PS:17.0: Remove componentWillMount, componentWillReceiveProps, and componentWillUpdate . (Only the new “UNSAFE_” lifecycle names will work from this point forward.)
  */
  componentWillMount() {
    console.log("0:componentWillMount");
  }
  // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    console.log("1:componentDidMount");
  }
  componentWillUpdate() {
    console.log("2:componentWillUpdate");
  }
  componentWillUnmount() {
    console.log("3:componentWillUnmount");
  }

  render() {
    return (
      <div>
        <h4>这里用来测试生命周期函数</h4>
      </div>
    );
  }
}
