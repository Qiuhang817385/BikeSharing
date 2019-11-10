import React, { Component } from 'react';
// 记得把App修改成无状态组件
class App extends Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
