import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  componentWillMount () {
    console.log("header-将要加载")
  }
  componentDidMount () {
    console.log('header-加载完了')
  }

  constructor() {
    super();
    this.state = {
      miniHeader: false
    }
  }

  switchHeaader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  }

  render() {
    // 行内样式  不建议使用
    const styleHeader = {
      header: {
        backgroundColor: '#ddd',
        'padding': (this.state.miniHeader) ? '3px' : '15px'
      }
    };
    return (
      <div>
        <header className="header" style={styleHeader.header} onClick={this.switchHeaader.bind(this)}>Hello</header>
      </div>
    );
  }
}

export default Header;