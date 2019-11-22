import React, {
    Component
} from 'react';
import {
    Card,
    Table,
    Modal,
    Button,
    message
} from 'antd';
// import axios from 'axios';
import axios from '../../axios'; //封装的方式
export default class BasicTable extends Component {
    state = {
        dataSource2: []
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
            state: '1',
            interest: '1',
            birthday: '2000-01-01',
            address: '秦皇岛海港区',
            time: '09:00'
        }
        ]
        // 这步的作用是存储DataSource
        this.setState({
            dataSource
        })
        this.request();
        dataSource.map((item, index) => {
            return item.key = index;
        })
    }
    request = () => {
        /*   axios.get('/api/tableList')
              .then((res) => {
                  if (res.status === 200 && res.data.code === 0) {
                      let result = res.data.result;
                      // result是一个数组
                      // this.setState(()=>{
                      //     return {
                      //         dataSource2:result
                      //     }
                      // })
                      this.setState(() => ({ dataSource2: [...result] }))
                      // for (const key in result) {
                      //    console.log(result[key]);
                      // }
                      console.log(result);
                      console.log(typeof res.status);
                  }
              })
              .catch(() => { alert('error') }) 
              
              使用直接使用的方式
              */
        /* 
        使用封装的方式

         */
        axios.ajax({
            url: '/api/tableList',
            data: {
                params: {
                    //    tableList?page=1
                    page: 1
                },
                //    isShowLoading:false
            }
        }).then((res) => {
            if (res.code === 0) {
                res.result.map((item, index) => {
                    return item.key = index;

                })
                this.setState(() => ({
                    dataSource2: [...res.result],
                    selectedRowKeys: [],
                    selectedRows: null
                }))
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名:${record.userName}`,
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })

    }

    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除提示',
            content: `确定要删除这些数据吗${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    })
    render() {
        // 变量定义在外面和定义在里面其实一样,需要引用的方式不一样
        const columns = [{
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
            dataIndex: 'sex',
            render(sex) {
                return sex === 1 ? '男' : '女'
            }
        }, {
            title: '状态',
            dataIndex: 'state',
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

        const {
            selectedRowKeys
        } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                // let ids = [];

                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys,
                    // selectedIds:ids
                    selectedRows
                })
            }
        }


        return (< div >
            <Card title="基础表格" >
                <Table bordered pagination={false}
                    dataSource={this.state.dataSource}
                    columns={columns} >
                </Table>
            </ Card >
            <Card title="动态数据渲染表格" >
                <Table bordered pagination={false}
                    dataSource={this.state.dataSource2}
                    columns={columns} >
                </Table>
            </Card >
            { /* 在表格当中进行按钮等组件的添加 */}
            {  /* 定义一个对象 rowSelection={rowSelection} */}
            { /* onrow事件控制点击某一行,然后获取数据 */}
            <Card title="data1" >
                <Table onRow={
                    (record, index) => {
                        return {
                            // 这是点击表格的时候才触发的事件
                            onClick: () => {
                                this.onRowClick(record, index)
                            }
                            // 点击行
                            //   onDoubleClick: event => {},
                            //   onContextMenu: event => {},
                            //   onMouseEnter: event => {}, // 鼠标移入行
                            //   onMouseLeave: event => {},
                        };
                    }
                }
                    rowSelection={rowSelection}
                    bordered 
                    pagination={false}
                    dataSource={this.state.dataSource2}
                    columns={columns}
                // 定义列的字段名
                >
                </Table>
            </Card >
            <Card title="data2" >
                <div>
                    <Button onClick={this.handleDelete} > 删除 </Button> </div >
                <Table
                    //   onRow={(record,index) => {

                    //   }}
                    rowSelection={rowCheckSelection}
                    bordered 
                    pagination={false}
                    dataSource={this.state.dataSource2}
                    columns={columns}
                // 定义列的字段名
                >
                </Table>
            </Card >
            // 分页插件
            <Card title="分页插件" >
                <div>
                    <Button onClick={this.handleDelete} > 删除 </Button> </div >
                <Table
                    bordered 
                    pagination={false}
                    dataSource={this.state.dataSource2}
                    columns={columns}
                >
                </Table>
            </Card >
        </div>
            // 工程的组件化开发,
        )
    }
}