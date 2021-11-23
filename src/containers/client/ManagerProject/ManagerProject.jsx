import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Space,
  Table,
  Tag,
  Popconfirm,
  Avatar,
  Popover,
  AutoComplete,
} from "antd";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import ModalEdit from "./modal/ModalEdit/ModalEditProject";
import { actShowModalEditProject } from "../../../hocs/hocModalForm/module/action";
import {
  actDeleteProject,
  actGetAllProjectSaga,
  actRemoveUserFromProjectSaga,
} from "./module/action";
import ModalEditProject from "./modal/ModalEdit/ModalEditProject";
import ConfirmDelete from "../../../components/ConfirmDelete/ConfirmDelete";
import SearchDebounce from "../../../components/SearchDebounce/SearchDebounce";
import {
  actAddUserProjectSaga,
  actGetUserSaga,
} from "../../../components/SearchDebounce/module/actions";
import { NavLink } from "react-router-dom";

export default function ManagerProject() {
  const { projectList } = useSelector((state) => state.projectManagerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAllProjectSaga());
  }, []);
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });
  const handleDeleteProject = (id) => {
    dispatch(actDeleteProject(id));
  };
  const handleRemoveUserFromProject = (data) => {
    dispatch(actRemoveUserFromProjectSaga(data));
  };
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  const clearFilters = () => {
    setState({ filteredInfo: null });
  };
  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };
  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      sorter: (item2, item1) => item2.id - item1.id,
      sortDirections: ["ascend"],
    },
    {
      title: "ProjectName",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record, index) => {
        return (
          <NavLink to={`./projectdetail/${record.id}`}>
            {record.projectName}
          </NavLink>
        );
      },
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    //   render: (text, record, index) => {
    //     let jsxContent = ReactHtmlParser(text);
    //     return <>{jsxContent}</>;
    //   },
    // },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "creator",
      // dataIndex: "categoryName",
      key: "creator",
      render: (text, record, index) => {
        return <Tag color="green">{record.creator?.name}</Tag>;
      },
      sorter: (item2, item1) => {
        let creator1 = item1.creator?.name.trim().toLowerCase();
        let creator2 = item2.creator?.name.trim().toLowerCase();
        if (creator1 < creator2) {
          return -1;
        }
        return 1;
      },
      sortDirections: ["descend"],
    },
    {
      title: "Members",
      dataIndex: "members",
      key: "members",
      render: (text, record, index) => {
        return (
          <>
            <Popover
              key={`tablemember${record.id}`}
              placement="bottom"
              title={"Table member"}
              content={() => (
                <>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Avata</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.members?.map((member, idx) => (
                        <tr>
                          <td>{member.userId}</td>
                          <td>{member.name}</td>
                          <td>
                            <Avatar src={member.avatar} />
                          </td>
                          <td>
                            <ConfirmDelete
                              handleDelete={() => {
                                handleRemoveUserFromProject({
                                  projectId: record.id,
                                  userId: member.userId,
                                });
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            >
              <span style={{ cursor: "pointer" }}>
                {record.members?.slice(0, 3).map((member, idx) => (
                  <Avatar key={idx} src={member.avatar} />
                ))}
                {record.members.length > 3 ? <Avatar>...</Avatar> : ""}
              </span>
            </Popover>
            <Popover
              key={`addmember${record.id}`}
              placement="rightTop"
              title={"Add member"}
              content={() => (
                <SearchDebounce
                  placeholder="input member"
                  actionSearch={actGetUserSaga}
                  actionSelect={actAddUserProjectSaga}
                  data={{ projectId: record.id }}
                />
              )}
              trigger="click"
            >
              <Button shape="circle">+</Button>
            </Popover>
          </>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            className="text-primary"
            onClick={() => {
              console.log("record", record);
              dispatch(actShowModalEditProject(record));
            }}
          >
            {" "}
            <EditOutlined />
          </a>
          <ConfirmDelete
            handleDelete={() => {
              handleDeleteProject(record.id);
            }}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      <h4>Project Manager</h4>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={projectList}
        onChange={handleChange}
      />
      <ModalEditProject />
    </>
  );
}
