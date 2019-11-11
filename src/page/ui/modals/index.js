import React, { Component } from 'react'
import { Card, Button ,Modal} from 'antd'
import './style.scss';
import  '../ui.scss';
export default class Modals extends Component {
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
    handleOpen=(type)=>{
        this.setState(()=>{
            return {
                // 怎么利用传进来的变量
                [type]:true
            }
        })
    }
    // 确认框的4个最基本的属性
    handleConfirm=(type)=>{

        // Modal.confirm()
        // Modal['confirm']
        // 这两种方式调用时一个意思
        /* 
            var a= {
                confirm:function () {}
            }
            a.confirm   ===   a['confirm']
         */
        // Modal.confirm({
            Modal[type]({
            title:'确认',
            content:'这里是内容区域',
            onOk(){
                alert('ok')
            },
            onCancel(){
                alert('cancel')
            }
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    {/* 
                    this.handleOpen('showModal1')   这样相当于一开始就会调用
                    如果需要传参,必须使用箭头函数,去return这个方法
                    加了括号之后相当于立即调用，所以编译后会直接执行一次，
                    改造为箭头函数相当于一个代码块，没有进行调用,
                    不传参数的话,只相当于仅仅声明了函数而没有调用
                     */}
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>warning</Button>
                </Card>
                {/* Open */}
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState(()=>{
                            return {
                                showModal1:false
                            }
                        })
                    }}
                >
                    <p>React</p>
                </Modal>

                
                {/* 自定义页脚 */}
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="这是确定文本"
                    cancelText="这是否定文本"
                    onCancel={()=>{
                        this.setState(()=>{
                            return {
                                showModal2:false
                            }
                        })
                    }}
                >
                    <p>React</p>
                </Modal>
                {/* 顶部20px弹框 */}
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    // 我还没有引入就可以修改???
                    style={{top:'20px'}}
                    onCancel={()=>{
                        this.setState(()=>{
                            return {
                                showModal3:false
                            }
                        })
                    }}
                >
                    <p>React</p>
                </Modal>
                {/* 水平垂直居中 */}
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    // 对话框外层容器的类名
                    wrapClassName="vertical-center-modal"
                    onCancel={()=>{
                        this.setState(()=>{
                            return {
                                showModal4:false
                            }
                        })
                    }}
                >
                    <p>React</p>
                </Modal>
            </div>
        )
    }
}
