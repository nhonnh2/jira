import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
export default function SideBar() {
  const [state, setState] = useState({
    collapsed: true,
  });
  const handleOnMouseEnter = () => {
    setState({
      collapsed: false,
    });
  };
  const handleOnMouseLeave = () => {
    setState({
      collapsed: true,
    });
  };
  return (
    <>
      <Sider
        className="sideBar"
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div className="logoJira paddingItem text-left">
          <i className="fab fa-jira"></i>
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<SearchOutlined />}>
            RECENT ISSUES
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusOutlined />}>
            CREATE ISSUS
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<QuestionCircleOutlined />}
            style={{ position: "absolute", bottom: "5%", width: "100%" }}
          >
            ABOUT
          </Menu.Item>
        </Menu>
      </Sider>
      {/* <div className="sideBar">
        <div className="sideBar-top">
          <div className="sideBar-icon">
            <i className="fab fa-jira" />
          </div>
          <div
            className="sideBar-icon"
            data-toggle="modal"
            data-target="#searchModal"
          >
            <i className="fa fa-search" />
            <span className="title">SEARCH ISSUES</span>
          </div>
          <div className="sideBar-icon">
            <i className="fa fa-plus" />
            <span className="title">CREATE ISSUES</span>
          </div>
        </div>
        <div className="sideBar-bottom">
          <div className="sideBar-icon">
            <i className="fa fa-question-circle" />
            <span className="title">ABOUT</span>
          </div>
        </div>
      </div>
     */}
    </>
  );
}
