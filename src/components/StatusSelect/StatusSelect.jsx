import { Select } from "antd";
import React from "react";
import projectApi from "../../apis/projectApi";
import statusApi from "../../apis/statusApi";
import taskTypeApi from "../../apis/taskTypeApi";
import withSelect from "../../hocs/withSelect";
const { Option } = Select;
function StatusSelect(props) {
  const { value, name, id, onChange } = props;

  const { list } = props;
  return (
    <>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        showSearch
        // style={{ width: 200 }}
        placeholder="Select task Status"
        optionFilterProp="children"
        // onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {list?.map((item, idx) => (
          <Option value={item.statusId} key={item.statusId}>
            {item.statusName}
          </Option>
        ))}
      </Select>
    </>
  );
}
export default withSelect(StatusSelect, statusApi.getAllStatusApi);
