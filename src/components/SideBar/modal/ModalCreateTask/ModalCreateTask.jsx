import { Input, InputNumber, Select, Slider } from "antd";
import { withFormik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import projectApi from "../../../../apis/projectApi";
import { SHOW_MODAL_CREATE_TASK } from "../../../../hocs/hocModalForm/module/types";
import withModalForm from "../../../../hocs/hocModalForm/withModalForm";
import AssigneesSelect from "../../../AssigneesSelect/AssigneesSelect";
import EditorTinymce from "../../../EditorTinymce/EditorTinymce";
import PrioritySelect from "../../../PrioritySelect/PrioritySelect";
import ProjectSelect from "../../../ProjectSelect/ProjectSelect";
import StatusSelect from "../../../StatusSelect/StatusSelect";
import TaskTypeSelect from "../../../TaskTypeSelect/TaskTypeSelect";
import { actCreateTaskSaga } from "./module/action";
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function ModalCreateTask(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;

  // function handleChange(value) {
  //   console.log(`Selected: ${value}`);
  // }
  const [timeTracking, setTimeTracking] = useState({
    timeSpent: 0,
    timeRemaining: 0,
  });
  const [projectId, setProjectId] = useState("");
  return (
    <>
      <div className="container">
        <div className="form-group">
          <div className="row">
            <div className="col-8">
              <label htmlFor="taskName" className="font-weight-bold">
                Task Name
              </label>
              <Input
                name="taskName"
                id="taskName"
                onChange={(e) => {
                  setFieldValue("taskName", e.target.value);
                }}
                placeholder="task name input"
              />
              <div className="text-danger">{errors.taskName}</div>
            </div>
            <div className="col-4">
              <label htmlFor="projectId" className="font-weight-bold">
                Project
              </label>
              <ProjectSelect
                name="projectId"
                onChange={(value) => {
                  setProjectId(value);
                  setFieldValue("projectId", value);
                }}
                id="projectId"
              />
              <div className="text-danger">{errors.projectId}</div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-4">
              {" "}
              <label htmlFor="statusId" className="font-weight-bold">
                Status
              </label>
              <StatusSelect
                name="statusId"
                onChange={(value) => {
                  setFieldValue("statusId", value);
                }}
                id="statusId"
              />
              <div className="text-danger">{errors.statusId}</div>
            </div>
            <div className="col-4">
              <label htmlFor="priorityId" className="font-weight-bold">
                Priority
              </label>
              <PrioritySelect
                name="priorityId"
                onChange={(value) => {
                  setFieldValue("priorityId", value);
                }}
                id="priorityId"
              />
              <div className="text-danger">{errors.priorityId}</div>
            </div>
            <div className="col-4">
              <label htmlFor="typeId" className="font-weight-bold">
                Task type
              </label>
              <TaskTypeSelect
                name="typeId"
                onChange={(value) => {
                  setFieldValue("typeId", value);
                }}
                id="typeId"
              />
              <div className="text-danger">{errors.typeId}</div>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div className="row">
            <div className="col-8">
              <label htmlFor="listUserAsign" className="font-weight-bold">
                List User Asign
              </label>
              <AssigneesSelect
                projectId={Number(projectId)}
                name="listUserAsign"
                onChange={(value) => {
                  setFieldValue("listUserAsign", value);
                }}
                id="listUserAsign"
              />
              <div className="text-danger">{errors.listUserAsign}</div>
            </div>
            <div className="col-4">
              <label htmlFor="originalEstimate" className="font-weight-bold">
                Original Estimate
              </label>
              <Input
                type="number"
                name="originalEstimate"
                id="originalEstimate"
                className="form-control"
                onChange={(e) => {
                  setFieldValue("originalEstimate", Number(e.target.value));
                }}
              />
              <div className="text-danger">{errors.originalEstimate}</div>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="timeTracking" className="font-weight-bold">
            Time Tracking
          </label>
          <Slider
            tooltipVisible
            // range={{ draggableTrack: true }}
            max={
              Number(timeTracking.timeSpent) +
              Number(timeTracking.timeRemaining)
            }
            onChange={(value) => {
              setFieldValue("timeTrackingSpent", Number(value));
              setTimeTracking({
                ...timeTracking,
                timeSpent: value,
              });
            }}
            value={timeTracking.timeSpent}
          />
          <div className="row">
            <div className="col-6">
              <label htmlFor="timeTrackingSpent">Time spent</label>{" "}
              <InputNumber
                min={1}
                max={100000}
                value={timeTracking.timeSpent}
                onChange={(value) => {
                  setFieldValue("timeTrackingSpent", Number(value));
                  setTimeTracking({
                    ...timeTracking,
                    timeSpent: value,
                  });
                }}
                id="timeTrackingSpent"
                name="timeTrackingSpent"
              />
              <div className="text-danger">{errors.timeTrackingSpent}</div>
            </div>
            <div className="col-6">
              <label htmlFor="timeTrackingRemaining">Time remaining</label>{" "}
              <InputNumber
                min={1}
                max={100000}
                value={timeTracking.timeRemaining}
                onChange={(value) => {
                  setFieldValue("timeTrackingRemaining", Number(value));
                  setTimeTracking({
                    ...timeTracking,
                    timeRemaining: value,
                  });
                }}
                id="timeTrackingRemaining"
                name="timeTrackingRemaining"
              />
              <div className="text-danger ml-1">
                {errors.timeTrackingRemaining}
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="font-weight-bold">
            Description
          </label>
          <EditorTinymce
            onEditorChange={(textNew, editor) => {
              setFieldValue("description", textNew);
            }}
            name="description"
            id="description"
          />
          <div className="text-danger">{errors.description}</div>
        </div>
      </div>
    </>
  );
}
const CreateTaskFormik = withFormik({
  enableReinitialize: false, //mỗi lần render laij chayj laij mapPropsTovalues
  mapPropsToValues: () => ({
    taskName: "",
    projectId: "",
    priorityId: "",
    originalEstimate: 0,
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
    typeId: "",
    statusId: "",
    listUserAsign: [],
    description: "",

    // categoryId:props.category[0]
  }),
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
    projectId: Yup.string().required("project is required"),
  }),
  handleSubmit: (data, { props, setSubmitting }) => {
    console.log("data create task", data);
    // props.dispatch(actCreateTaskSaga(data));
  },
  displayName: "CreateTask",
})(withModalForm(ModalCreateTask, SHOW_MODAL_CREATE_TASK));
// const mapStateToProps=(state)=({
//   category:state.category
// })
export default connect()(CreateTaskFormik);
