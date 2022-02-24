import {
  FacebookOutlined,
  GoogleOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { withFormik } from 'formik';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../../../components/Logo/Logo';
import { actLoginSaga, actRegisterSaga } from '../module/action';
function Register(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  const { error } = useSelector((state) => state.authReducer);

  return (
    <form onSubmit={handleSubmit} className="container formLogin">
      <div className="formLogin__content d-flex flex-column justify-content-center align-items-center">
        <Logo />
        <p className="jira-welcome">
          Welcome to jira.Please login to your account.
        </p>
        <Input
          className="mt-3 input-login"
          name="email"
          size="large"
          onChange={handleChange}
          placeholder="email"
          prefix={<MailOutlined />}
        />
        <div className="text-danger text-error">{errors.email}</div>
        <Input.Password
          className="mt-3 input-login"
          name="passWord"
          size="large"
          onChange={handleChange}
          placeholder="passWord"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          prefix={<LockOutlined />}
        />
        <div className="text-danger text-error">{errors.passWord}</div>
        <Input
          className="mt-3 input-login"
          name="name"
          size="large"
          onChange={handleChange}
          placeholder="name"
          prefix={<UserOutlined />}
        />
        <div className="text-danger text-error">{errors.name}</div>
        <Input
          className="mt-3 input-login"
          name="phoneNumber"
          size="large"
          onChange={handleChange}
          placeholder="phoneNumber"
          prefix={<PhoneOutlined />}
        />
        <div className="text-danger text-error">{errors.phoneNumber}</div>
        <Button size="large" htmlType="submit" className="mt-3 btn-login">
          Sign in
        </Button>
        <div className="text-danger text-error">{error}</div>
        <div className="or d-flex text-center mt-3 align-items-center flex-row">
          <hr className="lineOr" />
          <p>Or</p>

          <hr className="lineOr" />
        </div>

        <div className="social mt-3">
          <span className="mr-2">Sign in with social</span>
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<FacebookOutlined />}
            size={'default'}
          />
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<TwitterOutlined />}
            size={'default'}
          />
          <Button
            className="btn-loginWith mr-2"
            type="primary"
            icon={<GoogleOutlined />}
            size={'default'}
          />
        </div>
        <div className="create-account mt-2">
          <span>
            Do you already have an account?
            <Link className="ml-1" to="/login">
              login
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}
const LoginJiraFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    passWord: '',
    name: '',
    phoneNumber: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required('email is required')
      .email('email is invalid!'),
    passWord: Yup.string()
      .required('passWord is required')
      .min(6, 'passWord must have min 6 characters')
      .max(18, 'passWord must have max 18 characters'),
    name: Yup.string().required('name is required'),
    phoneNumber: Yup.string()
      .required('phoneNumber is required')
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Phone number is not valid'),
  }),
  handleSubmit: (data, { props, setSubmitting }) => {
    props.dispatch(actRegisterSaga(data));
  },

  displayName: 'BasicForm',
})(Register);
export default connect()(LoginJiraFormik);
