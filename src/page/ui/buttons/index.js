import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd';
import './style.scss'
import ButtonGroup from 'antd/lib/button/button-group';
import RadioGroup from 'antd/lib/radio/group';
export default class Buttons extends Component {
    //  可以不绑定this
    state = {
        loading: true
    }
    handleCloseLoading = () => {
        this.setState(() => {
            return { 
                loading: false
             }
        })
    }
    handleChange = (eve) => {
        const e = eve.target.value
        this.setState(()=>{
            return {
                size: e
            }
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    {/* 增删改一般主按钮
                        负按钮  关闭 */}
                    <Button>Imooc</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>disabled</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading} ></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button type="dashed" shape="circle" loading={this.state.loading} ></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>切换状态</Button>
                </Card>
                <Card title="按钮组">
                    <ButtonGroup>
                        <Button type="primary" icon="left" >返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </ButtonGroup>

                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <RadioGroup value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    {/* 增删改一般主按钮
                        负按钮  关闭 */}
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>dashed</Button>
                    <Button type="danger" size={this.state.size}>danger</Button>
                </Card>
            </div>
        )
    }
}
