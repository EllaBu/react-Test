import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Layout from './components/main/Layout'

class App extends Component {
  componentWillMount () {
    console.log("app-将要加载")
  }
  componentDidMount () {
    console.log('app-加载完了')
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Layout userId = {123456} username2={'buqian'} />
        <Footer />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
