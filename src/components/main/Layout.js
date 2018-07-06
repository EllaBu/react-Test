import React, { Component } from 'react';
import PropTypes from 'prop-types'
import LayChild from './LayChild'

class Layout extends Component {
  constructor () {
    super(); // 调用基类的所有的初始化方法
    this.state = {
      username: 'HaiMing',
      age: 28
    }
  }
  changeUserInfo () {
    this.setState({
      age: 999
    })
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
    let {username, age} = this.state
    let {userId, username2} = this.props
    return (
      <div>
        <p>{username}</p>
        <p>{username2}</p>
        <p>{age}</p>
        <p>{userId}</p>
        <button onClick={this.changeUserInfo.bind(this)}>提交</button>
        <LayChild age={age}/>
      </div>
    )
  }
}

export default Layout;

Layout.propTypes = {
  userId: PropTypes.number.isRequired
}
Layout.defaultProps = {
  username2: '默认值'
}
