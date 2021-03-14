import React from "react"
import "./index.scss"
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom"



export default class Login extends React.Component {
    
    render() {

        const layout = {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        const onFinish = values => {
            axios({

                method:"get",
                url:"https://localhost:5000/connect/token",
                data:{
                    grant_type:"password",
                    username:values.username,
                    password:values.Password,
                    scope:"openid profile role user_api"
                }
            }).then(res => {
                console(res)
                return <Link to="/#/manage" />;
            })
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
       
       

        return (
            <div className="container">
                <div className="main-bg"  ></div>
                <main className="login-box">
                    <div className="blur-bg" ></div>
                    <div className="login-content">
                        <h1>LOGIN</h1>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}>
                               <Input  />
                            </Form.Item>
                          
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit"> Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </main>
            </div>
        );
    }
}


