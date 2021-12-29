import React from "react";
// react的组件有4种
// 1、函数式组件
/* 
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
const element = <HelloMessage />;

*/
// 2、类组件，比如本例中的
// 更多可以参考以下这篇文章
// https://zh-hans.reactjs.org/docs/components-and-props.html
class MyTitle extends React.Component {
  render() {
    return (
      // 这是从父级传递过来的数据，但是问题是，只能用在style属性上吗？
      // 我用在了其他属性或内容中都不行，显示this不存在
      <h1 style={{ color: this.props.color }}>
        Hello 我的组件<span>123</span>
      </h1>
    );
  }
}

export default MyTitle;
