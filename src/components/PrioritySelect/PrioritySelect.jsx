import { Select } from "antd";
import React from "react";
import priorityApi from "../../apis/priorityApi";
import projectApi from "../../apis/projectApi";
import withSelect from "../../hocs/withSelect";
const { Option } = Select;
function PrioritySelect(props) {
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
        placeholder="Select Priority"
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
          <Option value={item.priorityId} key={item.priorityId}>
            {item.priority}
          </Option>
        ))}
      </Select>
    </>
  );
}
export default withSelect(PrioritySelect, priorityApi.getAllPriorityApi);
