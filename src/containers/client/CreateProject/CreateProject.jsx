import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import CategoryProjectSelect from "../../../components/CategoryProjectSelect/CategoryProjectSelect";
import EditorTinymce from "../../../components/EditorTinymce/EditorTinymce";
import { actCreateProjectSaga } from "./module/action";
function CreateProject(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = props;

  const handleEditorChange = (textNew, editor) => {
    setFieldValue("description", textNew);
  };

  return (
    <div className="createProject">
      <h4>CreateProject</h4>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <p>Project Name</p>
          <input type="text" name="projectName" className="form-control" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <EditorTinymce
            onEditorChange={handleEditorChange}
            name="description"
          />
        </div>
        <div className="form-group">
          {/* <CategoryProjectSelect
            name="categoryId"
            value=""
            onChange={handleChange}
            id="categoryId"
          /> */}
          <CategoryProjectSelect
            name="categoryId"
            onChange={(value) => {
              setFieldValue("categoryId", value);
            }}
            id="categoryId"
          />
          <div className="text-danger">{errors.categoryId}</div>
        </div>
        <button type="submit" className="btn btn-outline-primary" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
}
const CreateProjectFormik = withFormik({
  // enableReinitialize:true mỗi lần render laij chayj laij mapPropsTovalues
  mapPropsToValues: () => ({
    projectName: "",
    description: "",
    categoryId: "",
    // categoryId:props.category[0]
  }),
  validationSchema: Yup.object().shape({
    categoryId: Yup.string().required("categoryId is required"),
  }),
  handleSubmit: (data, { props, setSubmitting }) => {
    props.dispatch(actCreateProjectSaga(data));
  },
  displayName: "CreateProject",
})(CreateProject);
// const mapStateToProps=(state)=({
//   category:state.category
// })
export default connect()(CreateProjectFormik);
