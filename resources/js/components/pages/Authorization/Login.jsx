import { Button, Checkbox, Form, Input, Modal } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUserContext from "../../../contexts/AuthUserContext";
import "./auth.css";

const Login = () => {
    const [authUser, setAuthUser] = useContext(AuthUserContext);

    const navigate = useNavigate();

    const [error, setError] = useState();

    const submitHandler = async (values) => {
        const response = await axios.post("/api/login", values);
        if (response.data.errors) {
            setError(response.data.errors);
            return;
        }
        setAuthUser(response.data);
        localStorage.setItem("authUser", JSON.stringify(response.data));
        navigate("/");
    };

    return (
        <div className="Login-form  d-flex justify-content-center p-2 ">
            <div className="Login-form-wrapper">
                <div className="error-auth">{error}</div>
                <h1 className="text-center">Login</h1>

                <Form
                    name="basic"
                    layout="vertical"
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
                            { email: true },
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
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}
                        className="button-auth"
                    >
                        <button type="primary" htmlType="submit">
                            Submit
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
