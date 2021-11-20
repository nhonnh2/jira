import React, { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actGetAllProjectSaga } from "./module/action";
import withData from "../../../hocs/withData";
export default function ManagerProject() {
  const { projectList } = useSelector((state) => state.projectManagerReducer);
  const ditpatch = useDispatch();
  useEffect(() => {
    ditpatch(actGetAllProjectSaga());
  }, []);
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });
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
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();
        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
      //   filters: [
      //     { text: "Joe", value: "Joe" },
      //     { text: "Jim", value: "Jim" },
      //   ],
      //   filteredValue: filteredInfo.name || null,
      //   onFilter: (value, record) => record.name.includes(value),
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      //   ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        let jsxContent = ReactHtmlParser(text);
        return <>{jsxContent}</>;
      },
      //   sorter: (a, b) => a.age - b.age,
      //   sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
      //   ellipsis: true,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      //   filters: [
      //     { text: "London", value: "London" },
      //     { text: "New York", value: "New York" },
      //   ],
      //   filteredValue: filteredInfo.address || null,
      //   onFilter: (value, record) => record.address.includes(value),
      //   sorter: (a, b) => a.address.length - b.address.length,
      //   sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
      //   ellipsis: true,
    },
    {
      title: "creator",
      // dataIndex: "categoryName",
      key: "creator",
      render: (text, record, index) => {
        return <span>{record.creator?.name}</span>;
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
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a className="text-primary">
            {" "}
            <EditOutlined />
          </a>
          <a className="text-danger">
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
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
    </>
  );
}
withData;
