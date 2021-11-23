import { Select } from "antd";
import React from "react";
import projectApi from "../../apis/projectApi";
import withSelect from "../../hocs/withSelect";
const { Option } = Select;
function ProjectSelect(props) {
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
        placeholder="Select project"
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
            {item.projectName}
          </Option>
        ))}
      </Select>
    </>
  );
}
export default withSelect(ProjectSelect, projectApi.getAllProjectApi);
