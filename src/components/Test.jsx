import React from "react";

// 组件中的类小组件
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
        {this.props.text}
      </button>
    );
  }
}
// 函数式组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 要导出给其他组件使用
export default class Test extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <Square text="按钮1" />
        <Welcome name="函数式组件" />
      </div>
    );
  }
}
