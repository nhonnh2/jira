import { Select } from "antd";
import React, { useEffect, useState } from "react";
import projectApi from "../../apis/projectApi";
import userApi from "../../apis/userApi";
import withSelect from "../../hocs/withSelect";
import { STATUS_CODE } from "../../settings/apiConfig";
const { Option } = Select;
const children = [];

function AssignessSelect(props) {
  const { value, name, id, onChange, projectId } = props;
  const listAll = props.list;
  const [list, setList] = useState(props.list);
  console.log("value AssignessSelect", value);
  const options = list?.map((item, idx) => ({
    label: item.name,
    value: item.userId,
  }));
  useEffect(async () => {
    try {
      const { data, status } = await userApi.getUserByProjectIdApi(projectId);
      if (status === STATUS_CODE.SUCCESS) {
        setList(data.content);
      }
    } catch (err) {
      setList(listAll);
    }
  }, [projectId]);
  const listAssigness = value?.map((item, idx) => item.name);
  return (
    <>
      <Select
        id={id}
        name={name}
        value={listAssigness}
        onChange={onChange}
        mode="multiple"
        options={options}
        placeholder="Please select"
        optionFilterProp="label"
        style={{ width: "100%" }}
      />
    </>
  );
}
export default withSelect(AssignessSelect, userApi.getAllUserApi);
