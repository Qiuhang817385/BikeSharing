import React, { Component } from 'react'
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import moment from 'moment'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { Option } = Select;
const TextArea = Input.TextArea;
const CheckboxGroup = Checkbox.Group;
class RegisterForm extends Component {
    state = {

    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handelSubmit = () => {
        // 获取表单当中所有的值
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo));
        // {userName: "123", pwd: "12323"}
        // 表单验证
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName},${userInfo.pwd}`)
            }
        })

    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            // 修改
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    // 修改
                    userImg: imageUrl,
                    loading: false,
                }),
            );
        }
    };
    render() {
        // 解构出来的
        const { getFieldDecorator } = this.props.form;
        // 如果是formItemLayOut     写错的话,会直接反过来
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4,
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        // 定义偏移的layout 
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    // 偏移4列
                    offset: 4
                }
            }
        }
        const options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        return (
            <div>
                <Card title="注册表单">
                    <Form >
                        {/* 会自动生成冒号用户名: */}
                        <FormItem  {...formItemLayout} label="用户名">
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '用户名不能是空'
                                    }]
                                })(
                                    <Input placeholder="输入用户名"></Input>
                                )
                            }
                        </FormItem>
                        {/* 密码密码密码密码密码密码密码密码密码密码 */}
                        <FormItem label="密码"  {...formItemLayout}>
                            {
                                getFieldDecorator('pwd', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: '密码不能是空'
                                    }]
                                })(
                                    <Input type="password" placeholder="输入密码"></Input>
                                )
                            }
                        </FormItem>
                        {/* 性别性别性别性别性别性别性别性别性别 */}
                        <FormItem label="性别"  {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                    rules: []
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="多选框"  {...formItemLayout}>
                            {
                                getFieldDecorator('check', {
                                    initialValue: ['Pear'],
                                    rules: []
                                })(
                                    <CheckboxGroup options={options} >

                                    </CheckboxGroup>
                                )
                            }
                        </FormItem>
                        {/* 年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄年龄 */}
                        <FormItem label="年龄"  {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                    rules: []
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        {/* 当前状态当前状态当前状态当前状态当前状态 */}
                        <FormItem label="当前状态"  {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                    rules: []
                                })(
                                    <Select>
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        {/* 爱好爱好爱好爱好爱好爱好爱好爱好 */}
                        <FormItem label="爱好"  {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1', '2'],
                                    rules: []
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        {/* 是否毕业是否毕业是否毕业是否毕业是否毕业是否毕业 */}
                        <FormItem label="是否毕业"  {...formItemLayout}>
                            {
                                getFieldDecorator('isGraduate', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: []
                                })(
                                    <Switch>

                                    </Switch>
                                )
                            }
                        </FormItem>
                        {/* 生日 生日生日生日生日生日生日生日*/}
                        <FormItem label="生日"  {...formItemLayout}>
                            {
                                getFieldDecorator('birth', {
                                    initialValue: moment('2019-11-15'),
                                    //需要对moment进行转换
                                    rules: []
                                })(
                                    <DatePicker
                                        showTime
                                        // format="YYYY-MM-DD HH:mm:ss"
                                        format="YYYY-MM-DD"
                                    ></DatePicker>
                                )
                            }
                        </FormItem>
                        {/* 联系地址*/}
                        <FormItem label="联系地址"  {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '',
                                    //需要对moment进行转换
                                    rules: []
                                })(
                                    <TextArea
                                        autoSize={{ minRows: 3, maxRows: 6 }}
                                    ></TextArea>
                                )
                            }
                        </FormItem>
                        {/* 早起时间*/}
                        <FormItem label="早起时间"  {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    rules: []
                                })(
                                    <TimePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                    //    format="YYYY-MM-DD"
                                    ></TimePicker>
                                )
                            }
                        </FormItem>
                        {/* 上传插件*/}
                        <FormItem label="上传插件"  {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    rules: []
                                })(
                                    // 实战的话需要上传的接口,服务端需要把上传的接口给我们
                                    <Upload
                                       
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img alt="n" src={this.state.userImg} /> : <Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        {/* 协议*/}
                        <FormItem   {...offsetLayout} >
                            {
                                getFieldDecorator('xieyi', {
                                    rules: []
                                })(
                                    <Checkbox>已经阅读协议</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            <Button type="primary"
                                onClick={this.handelSubmit}
                            >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create()(RegisterForm);
export default WrappedRegistrationForm;