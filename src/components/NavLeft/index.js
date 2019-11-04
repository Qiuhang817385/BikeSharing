import React, { Component } from "react";
import menuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import "./index.scss"
const { SubMenu } = Menu;
function handleClick(e) {
  console.log('click', e);
}
export default class index extends Component {
  // 进行菜单渲染
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode
    })
  }
  // 写法如果写成renderMenu(){},那么它的this指向的是当前react对象,跟生命周期函数一样  
  // 会报错,所以使用箭头函数或者bind(this)
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          // 如果有,首先返回的是一级菜单,在一级菜单里面调用,再返回二级菜单
          <SubMenu title={item.title} key={item.key}>
             {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>

    })
  }
  render() {

    return <div >
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt="" />
        <h1>Imooc MS</h1>

      </div>
      <Menu onClick={handleClick} mode="vertical" theme="dark">
        {this.state.menuTreeNode}
      </Menu>
    </div>;
  }
}
