import React, { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ReactHtmlParser from "react-html-parser";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actGetAllProjectSaga } from "./module/action";
const data = [];
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
      title: "ProjectName",
      dataIndex: "projectName",
      key: "projectName",
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
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>
            {" "}
            <EditOutlined />
          </a>
          <a>
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
