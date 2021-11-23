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
  console.log(list);
  const options = list?.map((item, idx) => ({
    label: item.name,
    value: item.userId,
  }));
  useEffect(async () => {
    try {
      const { data, status } = await userApi.getUserByProjectIdApi(projectId);
      if (status === STATUS_CODE.SUCCESS) {
        console.log("data option assignees success", data.content);
        setList(data.content);
      }
    } catch (err) {
      console.log("data option assignees fail", listAll);
      setList(listAll);
    }
  }, [projectId]);
  console.log("data option assignees", listAll);
  return (
    <>
      <Select
        id={id}
        name={name}
        value={value}
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
