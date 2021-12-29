import React from "react";
import Axios from "axios";

export default class Lifecircle extends React.Component {
  constructor(...arg) {
    super(...arg);
    this.state = {
      data: "假数据",
      total_count: 0,
      isloading: true,
      err: null
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
  // getDerivedStateFromProps() {
  //   console.log("0:componentWillMount");
  // }
  // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    console.log("1:componentDidMount");
    // 一般在这里添加ajax

    // Axios({
    //   type: "get",
    //   headers: {
    //     projectId: "055c321b0b48409fa26181eff533349c",
    //     Authorization: "Bearer 49d8e89d-94c1-4000-bb78-096df838b330"
    //   },
    //   // url: "https://api.github.com/search/repositories?q=javascript&sort=stars"
    //   url: "http://10.31.88.167:8091/physicalModel/getProjectModel"
    // })
    Axios.get(
      "https://api.github.com/search/repositories?q=javascript&sort=stars"
    )
      .then((res) => {
        console.log(res);
        this.setState({
          total_count: res.data.total_count,
          data: res.data,
          isloading: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // getSnapshotBeforeUpdate() {
  //   console.log("2:componentWillUpdate");
  // }
  componentWillUnmount() {
    // 组件快卸载时
    console.log("3:componentWillUnmount");
  }

  render() {
    if (this.state.isloading) {
      return <div>loading...</div>;
    } else if (this.state.err != null) {
      return <div>错误：this.state.err</div>;
    } else {
      var projects = this.state.data.items;
      console.log(projects);
      var results = [];
      projects.forEach((p) => {
        var item = <li key={p.node_id}>{p.name}</li>;
        results.push(item);
      });
      return (
        <div>
          <h4>这里用来测试生命周期函数</h4>
          <p>为您找到：{this.state.total_count} 项结果</p>
          <ul>{results}</ul>
        </div>
      );
    }
  }
}
