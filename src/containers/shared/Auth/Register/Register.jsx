import {
  FacebookOutlined,
  GoogleOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import Logo from "../../../../components/Logo/Logo";
import { actLoginSaga } from "../module/action";
function Register(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <form onSubmit={handleSubmit} className="container formLogin">
      <div className="formLogin__content d-flex flex-column justify-content-center align-items-center">
        <Logo />
        <p className="jira-welcome">
          Welcome to jira.Please login to your account.
        </p>
        <Input
          className="mt-5 input-login"
          name="email"
          size="large"
          onChange={handleChange}
          placeholder="email"
          prefix={<UserOutlined />}
        />
        <div className="text-danger">{errors.email}</div>
        <Input
          className="mt-4 input-login"
          name="password"
          size="large"
          onChange={handleChange}
          placeholder="password"
          prefix={<LockOutlined />}
        />
        <div className="text-danger">{errors.password}</div>
        <Button size="large" htmlType="submit" className="mt-5 btn-login">
          Sign in
        </Button>
        <div className="or d-flex text-center mt-4 align-items-center flex-row">
          <hr className="lineOr" />
          <p>Or</p>

          <hr className="lineOr" />
        </div>

        <div className="social mt-4">
          <span className="mr-2">Sign in with social</span>
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<FacebookOutlined />}
            size={"default"}
          />
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<TwitterOutlined />}
            size={"default"}
          />
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<GoogleOutlined />}
            size={"default"}
          />
        </div>
        <div className="create-account mt-4">
          <span>
            Do you want to create a new account?
            <a className="ml-1" href="">
              Create Account
            </a>
          </span>
        </div>
      </div>
    </form>
  );
}
const LoginJiraFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("email is required")
      .email("email is invalid!"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must have min 6 characters")
      .max(18, "password must have max 18 characters"),
  }),
  handleSubmit: ({ email, password }, { props, setSubmitting }) => {
    props.dispatch(actLoginSaga(email, password));
  },

  displayName: "BasicForm",
})(Register);
export default connect()(LoginJiraFormik);
