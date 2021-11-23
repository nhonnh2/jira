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
import { useDispatch } from "react-redux";
import { actShowModalCreateTask } from "../../hocs/hocModalForm/module/action";
import ModalCreateTask from "./modal/ModalCreateTask/ModalCreateTask";

const { Header, Sider, Content } = Layout;
export default function SideBar() {
  const [state, setState] = useState({
    collapsed: true,
  });
  const disPatch = useDispatch();
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
          <Menu.Item
            key="2"
            onClick={() => {
              disPatch(actShowModalCreateTask());
            }}
            icon={<PlusOutlined />}
          >
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
      <ModalCreateTask />
    </>
  );
}
