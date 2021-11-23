import { Select } from "antd";
import React from "react";
import projectCategoryApi from "../../apis/projectCategoryApi";
import withSelect from "../../hocs/withSelect";
const { Option } = Select;
function CategoryProjectSelect(props) {
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
        placeholder="Select category project"
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
            {item.projectCategoryName}
          </Option>
        ))}
      </Select>
    </>
  );
}
export default withSelect(
  CategoryProjectSelect,
  projectCategoryApi.getAllProjectCategoryApi
);
