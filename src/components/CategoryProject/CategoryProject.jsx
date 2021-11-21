import React, { useEffect, useState } from "react";
import projectApi from "../../apis/projectApi";
import { STATUS_CODE } from "../../settings/apiConfig";

export default function CategoryProject(props) {
  const [category, setCategory] = useState([]);
  let { value, name, id, onChange } = props;
  let call = false;
  if (value === "" || value === null || value === undefined) {
    value = "";
    call = true;
  }
  useEffect(async () => {
    try {
      const { data, status } = await projectApi.fetchCategoryApi();
      if (status === STATUS_CODE.SUCCESS) {
        setCategory(data.content);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <select
        name={name}
        value={value}
        className="form-control"
        id={id}
        onChange={onChange}
      >
        {call ? (
          <option disabled hidden>
            Chọn loại dự án
          </option>
        ) : (
          ""
        )}
        {category?.map((category, idx) => {
          // if (selected)
          //   return (
          //     <option value={category.id} selected key={category.id}>
          //       {category.projectCategoryName}
          //     </option>
          //   );
          return (
            <option value={category.id} key={category.id}>
              {category.projectCategoryName}
            </option>
          );
        })}{" "}
      </select>
    </>
  );
}
