import React, { Component } from 'react'
import Child from './Child';
// import 'antd/dist/antd.css';
// import "../scss/style.scss";
import "../less/style.less";
import { Button } from 'antd';
export default class LifeSpan extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count:0,
    //     };
    // }
    // 直接声明也可以
    state = {
        count: 0
    }
    render() {
        // const style={
        //     padding: 20,
        // }
        return (
            <div className="content">
            <Button type="link">Link</Button>
            <Button type="danger">Danger</Button>
                <Button type="primary">Primary</Button>
                <Button type="dashed">Dashed</Button>
                <p className="lifeSpan">生命周期</p>
                <button onClick={this.handleAdd}>点击一下</button>
                <button onClick={this.handleClick.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name2="jack"></Child>
            </div>
        )
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1,
        })
    }
}
