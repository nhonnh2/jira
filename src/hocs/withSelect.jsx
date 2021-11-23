import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { STATUS_CODE } from "../settings/apiConfig";
const { Option } = Select;
const withSelect = (ComponentChild, fetchApi) => {
  return (props) => {
    const [list, setList] = useState([]);

    useEffect(async () => {
      try {
        const { data, status } = await fetchApi();
        if (status === STATUS_CODE.SUCCESS) {
          setList(data.content);
        }
      } catch (err) {
        console.log(err);
      }
    }, []);
    return (
      <>
        <ComponentChild list={list} {...props} />
      </>
    );
  };
};

export default withSelect;
