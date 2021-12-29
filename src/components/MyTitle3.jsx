import React from "react";

export default class MyTitle3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //这里的word会变成当前时间
      word: "world",
      // 点击后不断+1
      num: 0,
      //写个开关，用来恢复默认值
      isFlag: false
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  fun() {
    // 正常的使用window的方法
    // alert(1);
    // 再次点击时，需要恢复到默认文字
    let flag = !this.state.isFlag;
    // 在这里添加时间，
    // 通过在这里添加定时器，实现了时间的刷新
    let date = () => {
      let d = new Date().toLocaleString();
      // 更新组件状态的值
      this.setState({
        word: flag ? d : "world",
        isFlag: flag
      });
    };
    date(); //初次加载时显示时间
    // setInterval(date, 1000); //定时显示时间
  }

  add() {
    let num = this.state.num;
    num++;
    this.setState({
      num
    });
  }

  sub() {
    let num = this.state.num;
    num--;
    // setState的方法是异步的，所以要获取最新的值，只能通过回调
    this.setState(
      {
        num
      },
      () => {
        console.log(this.state.num); //添加回调，更新后的值
      }
    );
  }

  render() {
    return (
      // 如果是style则需要多添加一个{}，因为{}本来就是样式的
      <div style={{ color: "red" }}>
        你好：{this.state.word}
        {/* 也可以这么写：{()=>this.show()} */}
        <button onClick={this.fun.bind(this)}>
          点击后修改文字或显示时间，再点击则恢复
        </button>
        <br />
        <button onClick={() => this.sub()}>-</button>
        <input type="text" size="5" value={this.state.num} readOnly />
        <button onClick={this.add.bind(this)}>+</button>
      </div>
    );
  }
}
