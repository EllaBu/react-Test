import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  componentWillMount () {
    console.log("header-将要加载")
  }
  componentDidMount () {
    console.log('header-加载完了')
  }
  render() {
    return (
      <div>
        <header className="header">Hello</header>
      </div>
    );
  }
}

export default Header;