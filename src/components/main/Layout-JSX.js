import React, { Component } from 'react';

class Layout extends Component {
  // 生命周期
  // 页面将要加载的时候
  componentWillMount () {
    console.log("layout-将要加载")
  }
  componentDidMount () {
    console.log('layout-加载完了')
  }
  render () {
    var userName = ''
    let boolInput = false
    let html = 'LEO &nbsp; LEO'
    return (
      <div>
        <p>body</p>
        <p>{userName === '' ? '用户还没有登录' : '用户名：' + userName}</p>
        <p><input type="button" disabled={boolInput} value="点击按钮"/></p>
        <p>{html}</p> {/* 需要进行Unicode转码 */}
        <p dangerouslySetInnerHTML = {{__html: html}}></p> 
        {/* 可以解析为HTML */}
      </div>
    )
  }
}

export default Layout;