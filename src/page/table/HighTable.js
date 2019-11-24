import React, { Component } from 'react'
import { Card, Table, Badge, Button, Modal, message } from 'antd';
export default class HighTable extends Component {
    state = {}
    componentDidMount() {
        const dataSource = [{
            id: '0',
            userName: 'qiu',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '1',
            userName: 'Hang',
            sex: '1',
            state: '2',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '2',
            userName: 'Hang',
            sex: '1',
            state: '3',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '3',
            userName: 'Hang',
            sex: '1',
            state: '4',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '4',
            userName: 'Hang',
            sex: '1',
            state: '5',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '5',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '6',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '7',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '8',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '9',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '10',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '11',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '12',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '13',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '14',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '15',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '16',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '17',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '18',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '19',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '20',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '21',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '22',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '23',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '24',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '25',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '26',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '27',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '28',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '29',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        {
            id: '30',
            userName: 'Hang',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        },
        ]
        // 这步的作用是存储DataSource
        this.setState({
            dataSource
        })
        dataSource.map((item, index) => {
            return item.key = index;
        })
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            // 这里是一个对象
            sortOrder: sorter.order
        })

    }
    handleDelete = (item) => {
        // let id = item.id;
        Modal.confirm({
            title: '确定',
            content: '您确认删除这条数据吗?',
            onOk: () => {
                message.success('删除成功');
                // 刷新数据列表
            }
        })

    }
    render() {
        const columns = [{
            // title展示表头需要展示的内容
            title: 'id',
            // 数据源返回的字段
            dataIndex: 'id',
            width: 80,
        },
        {
            title: '用户名',
            dataIndex: 'userName',
            width: 80,
        }, {
            title: '性别',
            dataIndex: 'sex',
            width: 80,
            render(sex) {
                return sex === 1 ? '男' : '女'
            }
        }, {
            title: '状态',
            dataIndex: 'state',
            width: 80,
            render(state) {
                let config = {
                    '1': '这是1',
                    '2': 'zheshi2',
                    '3': '这是3',
                    '4': '这是4',
                    '5': '这是5'
                }
                return config[state];
            }
        }, {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        }, {
            title: '生日',
            dataIndex: 'birthday',
            width: 120,
        }, {
            title: '地址',
            dataIndex: 'address',
            width: 120,
        }, {
            title: '早起时间',
            dataIndex: 'time',
            width: 80,
        }
        ]
        const columns3 = [{
            // title展示表头需要展示的内容
            title: 'id',
            // 数据源返回的字段
            dataIndex: 'id',
            width: 80,
        },
        {
            title: '用户名',
            dataIndex: 'userName',
            width: 80,
        }, {
            title: '性别',
            dataIndex: 'sex',
            width: 80,
            render(sex) {
                return sex === 1 ? '男' : '女'
            }
        }, {
            title: '状态',
            dataIndex: 'state',
            width: 80,
            render(state) {
                let config = {
                    '1': <Badge status='success' text="成功" />,
                    '2': <Badge status='error' text="报错" />,
                    '3': <Badge status='default' text="正常" />,
                    '4': <Badge status='processing' text="进行中" />,
                    '5': <Badge status='warning' text="警告" />
                }
                return config[state];
            }
        }, {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        }, {
            title: '生日',
            dataIndex: 'birthday',
            width: 120,
        }, {
            title: '地址',
            dataIndex: 'address',
            width: 120,
        }, {
            title: '操作',
            // text,文本,item这一行所有字段
            // 箭头函数的作用域指向本身
            render: (text, item) => {
                return <Button onClick={(item) => { this.handleDelete(item) }}>删除</Button>
            }
        }
        ]
        const columns2 = [{
            // title展示表头需要展示的内容
            title: 'id',
            // 数据源返回的字段
            dataIndex: 'id',
            width: 80,
            fixed: 'left',
            sorter: (a, b) => {
                return a.id - b.id;
            },
            sortOrder: this.state.sortOrder
        },
        {
            title: '用户名',
            dataIndex: 'userName',
            width: 80,
            fixed: 'left'
        }, {
            title: '性别',
            dataIndex: 'sex',
            width: 80,
            render(sex) {
                return sex === 1 ? '男' : '女'
            }
        }, {
            title: '状态',
            dataIndex: 'state',
            width: 80,
            render(state) {
                let config = {
                    '1': '这是1',
                    '2': 'zheshi2',
                    '3': '这是3',
                    '4': '这是4',
                    '5': '这是5'
                }
                return config[state];
            }
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '爱好',
            dataIndex: 'interest',
            width: 80,
        },
        {
            title: '生日',
            dataIndex: 'birthday',
            width: 120,
        }, {
            title: '地址',
            dataIndex: 'address',
            width: 120,
            fixed: 'right'
        }, {
            title: '早起时间',
            dataIndex: 'time',
            width: 80,
            fixed: 'right'
        }
        ]
        return (
            <div>
                <Card title="基础表格" >
                    <Table bordered pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns} scroll={{ y: 240 }} >
                    </Table>
                </ Card >
                <Card title="动态数据渲染表格" >
                    <Table bordered pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns2} scroll={{ x: 970, y: 240 }} >
                    </Table>
                </Card >
                <Card title="表格排序" >
                    <Table bordered pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns2} scroll={{ x: 970, y: 240 }}
                        onChange={this.handleChange} >
                    </Table>
                </Card >
                <Card title="操作按钮" >
                    <Table bordered pagination={false}
                        dataSource={this.state.dataSource}
                        columns={columns3} scroll={{ x: 970, y: 240 }}
                    >
                    </Table>
                </Card >
            </div>
        )
    }
}
