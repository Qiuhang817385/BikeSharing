import React, { Component } from 'react';
import { Card, Form, Input, Button ,message,Icon,Checkbox} from 'antd';
const FormItem = Form.Item;
class LoginForm extends Component {
    handelSubmit = ()=>{
        // 获取表单当中所有的值
       let userInfo =  this.props.form.getFieldsValue();
    //    console.log(userInfo);
    // {userName: "123", pwd: "12323"}
    // 表单验证
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName},${userInfo.pwd}`)
            }
        })
    }
    render() {
        // 自动封装的
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登陆行内表单">
                    {/* 指定表单是内联,还是水平方向的 */}
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="输入用户名"></Input>
                            {/* 获取值的话,常规操作是绑定onchange事件 */}
                        </FormItem>
                        <FormItem>
                            <Input placeholder="输入密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单">
                    {/* 默认就是水平的 */}
                    {/*  */}
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required:true,
                                        message:'用户名不为空'
                                    },{
                                        min:5,
                                        max:10,
                                        message:'长度不在范围内'
                                    },{
                                        // 正则
                                        // pattern:/^[A-z]/g,
                                        // message:'开头必须英文字母'
                                        // pattern:/^\w+$/g,
                                        // message:'必须字母数字'
                                        pattern:new RegExp('^\\w+$','g'),
                                        message:'必须字母数字'
                                    }
                                ]
                                })(
                                    // 使用前缀图标
                                    <Input prefix={<Icon type='user'/>} placeholder="输入用户名"></Input>
                                )
                            }
                            {/* 获取值的话,常规操作是绑定onchange事件 */}

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('pwd', {
                                    initialValue: '',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type='lock'/>} type="password" placeholder="输入密码"></Input>
                                )
                            }
                        </FormItem>
                        {/* 记住密码 */}
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    // 默认勾选
                                    valuePropName:'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <Button type="primary" style={{float:'right'}}>忘记密码</Button>
                            
                        </FormItem>
                        <FormItem>
                            <Button type="primary" 
                                onClick = {this.handelSubmit}
                            >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
// 一定要创建
const WrappedRegistrationForm = Form.create()(LoginForm);
export default WrappedRegistrationForm;