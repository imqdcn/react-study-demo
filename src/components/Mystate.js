import React from "react";

export default class MyState extends React.Component {
  constructor(...arg) {
    super(...arg);
    // 在这里放组件内部的状态（state），用来引起视图的更新，相当于是组件的data
    this.state = {
      name: "假数据"
    };
  }
  // 组件自己的方法，这种写法有点类似于Vue的setup方法，可以放数据，也可以放方法
  handerFun(e) {
    // console.log(e);
    let val = e.target.value;
    // 用来改变state的值，有点类似于微信小程序的setData方法
    this.setState({
      name: val
    });
  }
  // 渲染数据
  render() {
    return (
      <div>
        {/* 将handerFun中的this绑定为外面的this，防止它变成window ,注意，HTML属性后面要接活的数据，不能添加引号*/}
        <input type="text" onChange={this.handerFun.bind(this)} />
        {/* 访问组件state的属性值，注意这里是单{} */}
        <p>这里是通过输入框得到的数据：{this.state.name}</p>
      </div>
    );
  }
}
