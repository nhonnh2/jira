import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import BackGroundjiraAuth from './jiraAuth.png';

import withLayout from '../../hocs/withLayout';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
const { Sider, Content } = Layout;
const styleSider = {
  backgroundColor: `transparent`,
  backgroundImage: `url(${BackGroundjiraAuth})`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100%`,
};
const styleBackground = {
  background: 'rgb(2,132,153)',
  background:
    'linear-gradient(356deg, rgb(0, 115 ,133) 0%, rgba(0,170,198,1) 50%, rgba(150,240,255,0.8998949921765581) 100%)',
};

function AuthLayout(props) {
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { userLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  });
  console.log('userLogin', userLogin);

  if (userLogin.email) {
    return <Redirect to={'/mainboard'} />;
  }
  return (
    <>
      <Loader />
      <Layout style={styleBackground}>
        <Sider width={width / 1.7} height={height} style={styleSider}></Sider>
        <Layout>
          <Content>{props.children}</Content>
        </Layout>
      </Layout>
    </>
  );
}
export default withLayout(AuthLayout);
