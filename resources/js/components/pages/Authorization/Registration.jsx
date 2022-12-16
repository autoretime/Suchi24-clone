import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
import AuthUserContext from "../../../contexts/AuthUserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Registration = () => {
    const [form] = Form.useForm();
    const [authUser, setAuthUser] = useContext(AuthUserContext);
    const navigate = useNavigate();

    const submitHandler = async (values) => {
        const response = await axios.post("/api/registration", values);
        console.log(response);

        if (!response.data.success) {
            form.setFields([
                {
                    name: "email",
                    errors: response.data.errors.email,
                },
            ]);
            return;
        }
        navigate("/login");
    };

    return (
        <div className="Login-form  d-flex justify-content-center p-2 ">
            <div className="Login-form-wrapper">
                {authUser ? (
                    <h3 className="error-auth">You are already logged in!</h3>
                ) : (
                    <>
                        <h1 className="text-center">Registration</h1>
                        <Form form={form} name="login" onFinish={submitHandler}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true }, { min: 3 }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true }, { type: "email" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please confirm your password!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "The two passwords that you entered do not match!"
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{ offset: 8, span: 16 }}
                                className="button-auth"
                            >
                                <button type="primary" htmlType="submit">
                                    Log in
                                </button>
                            </Form.Item>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Registration;
