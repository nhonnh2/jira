import React from "react";

export default function ContentProjectDetail(props) {
  const { listTask } = props;
  const renderListTask = () => {
    return listTask?.map((task, idx) => (
      <div className="card" key={idx}>
        <div className="card-header">BACKLOG 3</div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            data-toggle="modal"
            data-target="#infoModal"
            style={{ cursor: "pointer" }}
          >
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left">
                <i className="fa fa-bookmark" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img
                      src={
                        require("../../../../assets/img/download(1).jfif")
                          .default
                      }
                    />
                  </div>
                  <div className="avatar">
                    <img
                      src={
                        require("../../../../assets/img/download(2).jfif")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left">
                <i className="fa fa-check-square" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img
                      src={
                        require("../../../../assets/img/download(1).jfif")
                          .default
                      }
                    />
                  </div>
                  <div className="avatar">
                    <img
                      src={
                        require("../../../../assets/img/download(2).jfif")
                          .default
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    ));
  };
  return (
    <>
      <div className="content" style={{ display: "flex" }}>
        {renderListTask()}
      </div>
    </>
  );
}
