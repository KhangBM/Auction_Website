import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const Username = "toy_bids";
      const Password = "abc123";
      const credentials = `${Username}:${Password}`;

      // Mã hóa thành base64
      const credentialsBase64 = btoa(credentials);

      // Gửi yêu cầu POST để nhận token
      const response = await axios.post(
        "https://e-auction-api.up.railway.app/api/token",
        {
          grant_type: "password",
          email: values.email,
          fullName: values.fullName,
          password: values.password,
        }
      );

      console.log("Login Successful", response.data);

      // Gửi yêu cầu GET để lấy thông tin người dùng sau khi đã có token
      const userResponse = await axios.get(URLConstants.USER_URL, {
        headers: { Authorization: `Basic ${credentialsBase64}` },
      });

      console.log("User Info", userResponse.data);

      // Điều hướng đến trang "/home" sau khi đã nhận được thông tin người dùng
      navigate("/home");
    } catch (error) {
      console.error("Login Failed", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" w-[500px] h-[600px] flex flex-col rounded-[49px] pl-10 pr-10 pt-6 pb-6  bg-[#F6FBF9] justify-between ">
      <div className=" flex flex-col justify-center items-center gap-2">
        <p className=" text-[30px] font-bold ">Create an Account</p>
      </div>
      <div className=" flex flex-col justify-center items-center  h-[400px]  ">
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
          <Form.Item
            label="Retype Password"
            name="confirmpassword"
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
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className=" flex justify-center items-center">
        <p className=" text-sm font-normal">
          {" "}
          Already have an account ?{" "}
          <span
            onClick={() => navigate("/")}
            className=" hover:text-blue-400 cursor-pointer"
          >
            Sign in
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
