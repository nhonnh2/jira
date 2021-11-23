import { Select } from "antd";
import React from "react";
import projectApi from "../../apis/projectApi";
import taskTypeApi from "../../apis/taskTypeApi";
import withSelect from "../../hocs/withSelect";
const { Option } = Select;
function TaskTypeSelect(props) {
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
        placeholder="Select task type"
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
          <Option value={item.id} key={item.id}>
            {item.taskType}
          </Option>
        ))}
      </Select>
    </>
  );
}
export default withSelect(TaskTypeSelect, taskTypeApi.getAllTaskTypeApi);
