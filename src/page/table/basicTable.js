import React, { Component } from 'react';
import { Card, Table } from 'antd'
export default class BasicTable extends Component {
    state={
        dataSource2:[]
    }
    //  state = {
    //     y:4827
    // }
    // x = 1997;
    // {i}
    // {this.x}
    // {this.state.y}
    // const i = 1;
    /* 
    3种变量的定义方式
                    1.外部state
                    2.外部 直接赋值
                    3.内部const
     */
    componentDidMount () {
        const dataSource = [
            {
                id:'0',
                userName:'qiu',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'秦皇岛海港区',
                time:'09:00'
            },
            {
                id:'1',
                userName:'Hang',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'秦皇岛海港区',
                time:'09:00'
            }
        ]
        // 这步的作用是存储DataSource
        this.setState({
            dataSource
        })
    }
    render() {
        // 变量定义在外面和定义在里面其实一样,需要引用的方式不一样
        const columns = [
            {
                // title展示表头需要展示的内容
                title: 'id',
                // 数据源返回的字段
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            }, {
                title: '性别',
                dataIndex: 'sex'
            }, {
                title: '状态',
                dataIndex: 'state'
            }, {
                title: '爱好',
                dataIndex: 'interest'
            }, {
                title: '生日',
                dataIndex: 'birthday'
            }, {
                title: '地址',
                dataIndex: 'address'
            }, {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns}
                    >
                    </Table>
                </Card>
                <Card title="动态数据渲染表格">
                    <Table
                        bordered
                        pagination={false}
                        dataSource={this.state.dataSource2}
                        columns={columns}
                    >
                    </Table>
                </Card>


            </div>
        )
    }
}