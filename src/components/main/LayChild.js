import React, {Component} from 'react';

class LayChild extends Component{
  render () {
    return (
      <div>
        <hr/>
        <h5>这是子组件的元素</h5>
        <p>username:{this.props.age}</p>
        <hr/>
      </div>
    )
  }
}

export default LayChild;

