import { AutoComplete } from "antd";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actAddUserProjectSaga, actGetUserSaga } from "./module/actions";

export default function SearchDebounce(props) {
  const { placeholder, actionSearch, actionSelect, data } = props;
  const { listSearch } = useSelector((state) => state.searChDebouceReducer);
  const [value, setValue] = useState("");
  const typingTimeoutRef = useRef(null);
  const dispatch = useDispatch();
  const onSearchHandle = (value) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      dispatch(actionSearch(value));
    }, 500);
  };
  return (
    <>
      <AutoComplete
        options={listSearch?.map((user, idx) => ({
          label: user.name,
          value: user.userId.toString(),
        }))}
        value={value}
        onChange={(text) => {
          setValue(text);
        }}
        style={{ width: "100%" }}
        onSelect={(valueSelect, option) => {
          setValue(option.label);

          dispatch(actionSelect({ ...data, valueSelect: valueSelect }));
        }}
        onSearch={onSearchHandle}
        placeholder={placeholder}
      />
    </>
  );
}
