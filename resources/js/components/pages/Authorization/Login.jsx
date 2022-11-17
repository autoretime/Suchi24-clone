import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUserContext from '../../../contexts/AuthUserContext';




const Login = () => {

    const [authUser, setAuthUser] =useContext(AuthUserContext);
    const navigate =  useNavigate ()

    const [error, setError] = useState();

    const submitHandler = async (values) => {
        const response = await axios.post("/api/login", values)
           if (response.data.errors) {
                setError(response.data.errors);
               return;
           }
           setAuthUser(response.data);
           localStorage.setItem("authUser", JSON.stringify(response.data));
           navigate("/");
        };

    return (
        <div className='w-50 m-auto '>
            <h1 className='text-center'>Login</h1>
            {error}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{
                    span: 16,
                  }}
                onFinish={submitHandler}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",                            
                        },
                        { email: true }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
