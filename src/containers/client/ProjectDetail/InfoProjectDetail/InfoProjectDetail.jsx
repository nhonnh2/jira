import React from "react";

export default function InfoProjectDetail(props) {
  const { members } = props;
  const renderAvatar = () => {
    return members?.map((member, idx) => (
      <div key={member.userId} className="avatar">
        <img src={member.avatar} />
      </div>
    ));
  };
  return (
    <>
      <div className="info" style={{ display: "flex" }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          {renderAvatar()}
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
    </>
  );
}
