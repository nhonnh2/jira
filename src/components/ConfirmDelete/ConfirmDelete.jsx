import React from "react";
import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function ConfirmDelete(props) {
  const { handleDelete } = props;
  return (
    <>
      <Popconfirm
        placement="topRight"
        title={"Are you sure to delete this item?"}
        onConfirm={handleDelete}
        okText="Yes"
        cancelText="No"
      >
        <a className="text-danger">
          <DeleteOutlined />
        </a>
      </Popconfirm>
    </>
  );
}
