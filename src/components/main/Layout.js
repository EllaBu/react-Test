import React, { Component } from 'react';

class Layout extends Component {
  constructor () {
    super(); // 调用基类的所有的初始化方法
    this.state = {
      username: 'Hai'
    }
  }
  // 生命周期
  // 页面将要加载的时候
  componentWillMount () {
    console.log("layout-将要加载")
  }
  componentDidMount () {
    console.log('layout-加载完了')
  }
  render () {
    // 修改state  this.setState
    let {username} = this.state
    let {userid} = this.props
    return (
      <div>
        <p>{username}</p>
        <p>{userid}</p>
      </div>
    )
  }
}

export default Layout;