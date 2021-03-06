import React from "react";
import "./index.scss";
import { Form, Input, Button, Checkbox } from 'antd';
import axios from "axios";
import qs from "qs";
import setAuthToken from "../../libs/authActions.js";
import jwtdecode from 'jwt-decode';
//import  store from "../../store"



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
        let config = {
            header: {
                "Content-Type": "multipartform/form-data"
            }
        }
        const onFinish = values => {
            axios.post("https://localhost:5000/connect/token", qs.stringify
                ({
                    grant_type: "password",
                    username: values.username,
                    password: values.password,
                    scope: "openid profile role user_api",
                    client_id: "WebClient",
                    client_secret: "511536EF-F270-4058-80CA-1C89C192F69A"
                }), config
            )
                .then(res => {
                    const { access_token } = res.data
                    localStorage.setItem('jwToken', access_token);
                    window.location = "/#/manage/summary";
                    setAuthToken(access_token);
                    
                   
                    
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
                        <h1>登录</h1>
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
                                        message: 'Please input username!',
                                    },
                                ]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input password!',
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



