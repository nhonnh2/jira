import React from "react";
import { useSelector } from "react-redux";
import "./loaderStyle.scss";
export default function Loader() {
  const { isloading } = useSelector((state) => state.loaderReducer);
  console.log("isloading", isloading);
  return (
    <>
      {isloading ? (
        <div className="jiraLoader">
          <div className="jiraLoader-content">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
