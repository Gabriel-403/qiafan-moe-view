import React from "react";
import "./index.scss";
import { Form, Input, Button } from 'antd';
import axios from "axios";


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
            headers: {
                "Content-Type": "x-www-form-urlencoded"
            }
        };

        const onFinish = values => {
            const fm = new FormData();
            fm.append("UserName", values.username);
            fm.append('Password', values.password);
            fm.append('RoleName', "");
            axios.post('/api/user', fm, config)
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div className="Registercontainer">
                <div className="main-bg"  ></div>
                <main className="login-box">
                    <div className="blur-bg" ></div>
                    <div className="login-content">
                        <h1>注册</h1>
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
                                <Input />
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



