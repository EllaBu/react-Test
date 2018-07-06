/*
  mixin支持ES5写法，如果需要使用ES6语法，则需要安装react-mixin@2
  --所有的组件间公用的一个方法
  现在使用ES6写法，ES5写法可以去看官网
 */

const MixinLog = {
  componentDidMount() {
    // 公用的生命周期 编写项目中公用的事件和函数
    console.log('Mixin componentDidMount')
  },
  log () {
    console.log('abcdefg...')
  }
}

export default MixinLog;