import { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const Username = "toy_bids";
      const Password = "abc123";
      const credentials = `${Username}:${Password}`;

      // Mã hóa thành base64
      const credentialsBase64 = btoa(credentials);

      // Gửi yêu cầu POST để nhận token
      const response = await axios.post("https://e-auction-api.up.railway.app/api/token", {
        grant_type: "password",
        username: values.email,
        password: values.password,
      },{
        headers: { Authorization: `Basic ${credentialsBase64}` },
      });

      // Lưu token vào localStorage
      localStorage.setItem('userToken', response.data.access_token);

      console.log("Login Successful", response.data);

      navigate("/home");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 
  return (
    <div className=" w-[500px] h-[600px] flex flex-col rounded-[49px] pl-10 pr-10 pt-6 pb-6  bg-[#F6FBF9] ">
      <div className=" flex flex-col justify-center items-center gap-2">
        <p className=" text-[30px] font-bold ">Sign in</p>
        <p className=" text-sm font-normal">Welcome to our community !</p>
      </div>
      <div className=" flex flex-col justify-center items-center  h-[400px] ">
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}

          autoComplete="off"
          style={{ width: "100%" }}
          className=" flex flex-col gap-4"
        >
          <Form.Item
            label="Email Address"
            name="email"
            style={{ width: "100%", fontSize: "16px" }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" />
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
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item className=" flex justify-center items-center w-full">
            <Button
              type="default"
              htmlType="submit"
              className=" bg-[#8FD1D1] rounded-[24px] w-[300px] h-[60px] text-white font-medium text-xl"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className=" flex justify-center items-center">
        <p className=" text-sm font-normal">
          {" "}
          Don't have an account ?{" "}
          <span
            onClick={() => navigate("/signup")}
            className=" hover:text-blue-400 cursor-pointer"
          >
            Sign Up
          </span>{" "}
          now
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
