import { withFormik } from "formik";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect, useSelector } from "react-redux";
import AssigneesSelect from "../../../../components/AssigneesSelect/AssigneesSelect";
import PrioritySelect from "../../../../components/PrioritySelect/PrioritySelect";
import StatusSelect from "../../../../components/StatusSelect/StatusSelect";
import * as Yup from "yup";
import TimeTracking from "../../../../components/TimeTracking/TimeTracking";
import { Input } from "antd";
import TaskTypeSelect from "../../../../components/TaskTypeSelect/TaskTypeSelect";
import { actUpdateTaskSaga } from "./module/action";
import EditorTinymce from "../../../../components/EditorTinymce/EditorTinymce";

function ModalInfoTask(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;
  const { taskDetalModal } = useSelector((state) => state.taskReducer);
  const [visibleEditor, setVisibleEditor] = useState(false);
  const handleEditorChange = (textNew, editor) => {
    setFieldValue("description", textNew);
  };
  return (
    <>
      <div
        className="modal fade"
        id="infoModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="infoModal"
        aria-hidden="true"
        // onHide={console.log("ONHIDE ONHIDE ONHIDE ONHIDE ONHIDE ONHIDE")}
      >
        <div className="modal-dialog modal-info">
          <div className="modal-content">
            <div className="modal-header">
              <div className="col-2">
                <TaskTypeSelect
                  name="typeId"
                  onChange={(value) => {
                    setFieldValue("typeId", value);
                  }}
                  id="typeId"
                  value={values.typeId}
                />
              </div>
              <h4>{taskDetalModal.taskName}</h4>

              <div style={{ display: "flex" }} className="task-click">
                <div>
                  <i className="fab fa-telegram-plane" />
                  <span style={{ paddingRight: 20 }}>Give feedback</span>
                </div>
                <div>
                  <i className="fa fa-link" />
                  <span style={{ paddingRight: 20 }}>Copy link</span>
                </div>
                <i className="fa fa-trash-alt" style={{ cursor: "pointer" }} />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-8">
                    <p className="issue">This is an issue of type: Task.</p>
                    <div className="description">
                      <p>Description</p>
                      {visibleEditor ? (
                        <EditorTinymce
                          name="description"
                          onEditorChange={handleEditorChange}
                          value={values.description}
                        />
                      ) : (
                        <div
                          onClick={() => {
                            setVisibleEditor(true);
                          }}
                        >
                          {ReactHtmlParser(taskDetalModal.description)}
                        </div>
                      )}
                    </div>

                    <div className="comment">
                      <h6>Comment</h6>
                      <div
                        className="block-comment"
                        style={{ display: "flex" }}
                      >
                        <div className="avatar">
                          <img
                            src={
                              require("../../../../assets/img/download(1).jfif")
                                .default
                            }
                          />
                        </div>
                        <div className="input-comment">
                          <input type="text" placeholder="Add a comment ..." />
                          <p>
                            <span style={{ fontWeight: 500, color: "gray" }}>
                              Protip:
                            </span>
                            <span>
                              press
                              <span
                                style={{
                                  fontWeight: "bold",
                                  background: "#ecedf0",
                                  color: "#b4bac6",
                                }}
                              >
                                M
                              </span>
                              to comment
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="lastest-comment">
                        <div className="comment-item">
                          <div
                            className="display-comment"
                            style={{ display: "flex" }}
                          >
                            <div className="avatar">
                              <img
                                src={
                                  require("../../../../assets/img/download(1).jfif")
                                    .default
                                }
                              />
                            </div>
                            <div>
                              <p style={{ marginBottom: 5 }}>
                                Lord Gaben <span>a month ago</span>
                              </p>
                              <p style={{ marginBottom: 5 }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Repellendus tempora ex
                                voluptatum saepe ab officiis alias totam ad
                                accusamus molestiae?
                              </p>
                              <div>
                                <span style={{ color: "#929398" }}>Edit</span>•
                                <span style={{ color: "#929398" }}>Delete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="status" style={{ marginBottom: 20 }}>
                      <h6>STATUS</h6>
                      <StatusSelect
                        name="statusId"
                        onChange={(value) => {
                          setFieldValue("statusId", value);
                        }}
                        id="statusId"
                        value={values.statusId}
                      />
                    </div>
                    <div className="assignees" style={{ marginBottom: 20 }}>
                      <h6>ASSIGNEES</h6>
                      <AssigneesSelect
                        projectId={Number(values.projectId)}
                        name="listUserAsign"
                        onChange={(value) => {
                          setFieldValue("listUserAsign", value);
                        }}
                        id="listUserAsign"
                        value={values.listUserAsign}
                      />
                    </div>

                    <div className="priority" style={{ marginBottom: 20 }}>
                      <h6>PRIORITY</h6>
                      <PrioritySelect
                        name="priorityId"
                        onChange={(value) => {
                          setFieldValue("priorityId", value);
                        }}
                        id="priorityId"
                        value={values.priorityId}
                      />
                    </div>
                    <div className="originalEstimate">
                      <label
                        htmlFor="originalEstimate"
                        className="font-weight-bold"
                      >
                        Original Estimate
                      </label>
                      <Input
                        value={values.originalEstimate}
                        type="number"
                        name="originalEstimate"
                        id="originalEstimate"
                        className="form-control"
                        onChange={(e) => {
                          setFieldValue(
                            "originalEstimate",
                            Number(e.target.value)
                          );
                        }}
                      />
                    </div>
                    <div className="timeTracking">
                      <TimeTracking
                        timeTrackingSpent={values.timeTrackingSpent}
                        timeTrackingRemaining={values.timeTrackingRemaining}
                        errors={errors}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div style={{ color: "#929398" }}>
                      Create at a month ago
                    </div>
                    <div style={{ color: "#929398" }}>
                      Update at a few seconds ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const EditTaskFormik = withFormik({
  enableReinitialize: true, //mỗi lần render laij chayj laij mapPropsTovalues
  mapPropsToValues: (props) => {
    const { taskDetalModal, projectDetail } = props;
    console.log("props modal info task", props);
    return {
      taskName: taskDetalModal.taskName ?? "",
      projectId: projectDetail.id ?? "",
      priorityId: taskDetalModal.priorityTask?.priorityId ?? "",
      originalEstimate: taskDetalModal.originalEstimate ?? 0,
      timeTrackingSpent: taskDetalModal.timeTrackingSpent ?? 0,
      timeTrackingRemaining: taskDetalModal.timeTrackingRemaining ?? 0,
      typeId: taskDetalModal.taskTypeDetail?.id ?? "",
      statusId: taskDetalModal.statusId ?? "",
      listUserAsign: taskDetalModal.assigness ?? [],
      description: taskDetalModal.description ?? "",

      // categoryId:props.category[0]
    };
  },
  validationSchema: Yup.object().shape({
    priorityId: Yup.string().required("priority is required"),
    taskName: Yup.string().required("taskName is required"),
    originalEstimate: Yup.number().integer().min(1),
    timeTrackingSpent: Yup.number().integer().min(1),
    timeTrackingRemaining: Yup.number().integer().min(1),
    typeId: Yup.string().required("type is required"),
    statusId: Yup.string().required("status is required"),
    listUserAsign: Yup.array().min(1, "listUserAsign empty"),
    description: Yup.string().required("description is required"),
  }),
  handleSubmit: (data, { props, setSubmitting }) => {
    console.log("data Update task", data);
    props.dispatch(actUpdateTaskSaga(data));
  },
  displayName: "UpdateTask",
})(ModalInfoTask);
const mapStateToProps = (state) => ({
  taskDetalModal: state.taskReducer.taskDetalModal,
  projectDetail: state.projectDetailReducer.projectDetail,
});
export default connect(mapStateToProps)(EditTaskFormik);
