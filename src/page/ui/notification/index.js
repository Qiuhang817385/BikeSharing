import React, { Component } from 'react'
import { Card, Button, notification } from 'antd';
import './style.scss'
export default class Notification extends Component {
    openNotification = (type) => {
        // alert('1')
        // 重要程度,低
        // notification.success({
        notification[type]({
            message: '发工资了',
            description: '这里是描述',
        })
    }
    openNotification2 = (type,dir) => {
        // notification[type]({
        //     message: '发工资了',
        //     description: '这里是描述',
        //     placement:dir
        // })
        if(dir){
            notification.config({
                placement:dir
            })
        }
        notification[type]({
            message: '发工资了',
            description: '这里是描述',
            placement:dir
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification('success')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error')}>error</Button>
                </Card>
                {/* 控制通知提醒框的方向
                    placement topLeft topRight bottomLeft bottomRight
                */}
                <Card title="通知提醒框的方向" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNotification2('success','topLeft')}>topLeft</Button>
                    <Button type="primary" onClick={() => this.openNotification2('info','topRight')}>topRight</Button>
                    <Button type="primary" onClick={() => this.openNotification2('warning','bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={() => this.openNotification2('error','bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}
