import React, { Component } from 'react'
import { Card, Button,Spin, Icon, Alert } from 'antd';
import './style.scss'
export default class Loadings extends Component {

    render() {
        // const引用类型,值可以改,基本类型,值不可以改,      const声明的变量不能修改内存地址
        /* 
            const a=1;a=2;报错
            const a={b:1} a.b = 2 正确
         */
        const icon = <Icon type="loading" style={{ fontSize: '24px' }}></Icon>
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    {/* 指定使用什么样子的图标 */}
                    <Spin indicator={icon} />
                    {/* 把spin用在其他组件里面 */}

                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="这里是info描述"
                        type="info"
                    ></Alert>
                    <Spin>
                        <Alert
                            message="React"
                            description="这里是warning描述"
                            type="warning"
                        ></Alert>
                    </Spin>
                    <Spin tip="这里是提示文字" indicator={icon}>
                        <Alert
                            message="React"
                            description="这里是success描述"
                            type="success"
                        ></Alert>
                    </Spin>
                    <Spin>
                        <Button>这是一个按钮</Button>
                    </Spin>
                </Card>
            </div>
        )
    }
}
