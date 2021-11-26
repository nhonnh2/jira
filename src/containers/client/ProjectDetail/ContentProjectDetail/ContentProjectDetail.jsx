import React from "react";
import { useDispatch } from "react-redux";
import { actSetTaskDetailRedux } from "../ModalInfoTaskProjectDetail/module/action";

export default function ContentProjectDetail(props) {
  const disPatch = useDispatch();
  const { listTask } = props;

  const renderListTask = () => {
    return listTask?.map((taskListDetail, idx) => (
      <div className="card" key={idx} style={{ height: "auto" }}>
        <div className="card-header">{taskListDetail.statusName}</div>
        <ul className="list-group list-group-flush">
          {taskListDetail.lstTaskDeTail?.map((task, idx) => {
            return (
              <li
                key={idx}
                className="list-group-item"
                data-toggle="modal"
                data-target="#infoModal"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  disPatch(actSetTaskDetailRedux(task));
                }}
              >
                <p className="font-weight-300">{task.taskName}</p>
                {/* <p>
                  Each issue has a single reporter but can have multiple
                  assignees
                </p> */}
                <div className="block" style={{ display: "flex" }}>
                  <div className="block-left">
                    <p>{task.priorityTask.priority}</p>
                  </div>
                  <div className="block-right">
                    <div className="avatar-group" style={{ display: "flex" }}>
                      {task.assigness.map((user, idx2) => {
                        return (
                          <div key={idx2} className="avatar">
                            <img src={user.avatar} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
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
