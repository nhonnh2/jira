import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/Loader/Loader";
import LoginJiraFormik from "./FormLogin";
import BackGroundLoggin from "./jiraLogin2.png";
const { Sider, Content } = Layout;

const styleSider = {
  backgroundColor: `transparent`,
  backgroundImage: `url(${BackGroundLoggin})`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `100%`,
};
const styleBackground = {
  background: "rgb(2,132,153)",
  background:
    "linear-gradient(356deg, rgb(0 115 133) 0%, rgba(0,170,198,1) 50%, rgba(150,240,255,0.8998949921765581) 100%)",
};
export default function PageLogin() {
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  });
  return (
    <>
      <Loader />
      <Layout style={styleBackground}>
        <Sider width={width / 1.7} height={height} style={styleSider}></Sider>
        <Layout>
          <Content>
            <LoginJiraFormik />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
