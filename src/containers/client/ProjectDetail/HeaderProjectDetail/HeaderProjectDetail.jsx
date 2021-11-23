import React from "react";

export default function HeaderProjectDetail(props) {
  const { projectName } = props.projectDetail;
  return (
    <>
      <div className="header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
            <li className="breadcrumb-item">Project</li>
            <li className="breadcrumb-item">CyberLearn</li>
            <li className="breadcrumb-item active" aria-current="page">
              {projectName}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
