import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { withFormik } from "formik";
import projectApi from "../../../apis/projectApi";
import { connect } from "react-redux";
import * as Yup from "yup";
import { STATUS_CODE } from "../../../settings/apiConfig";
import { actCreateProjectSaga } from "./module/action";
import EditorTinymce from "../../../utils/EditorTinymce";
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
  const [category, setCategory] = useState([]);

  const handleEditorChange = (textNew, editor) => {
    setFieldValue("description", textNew);
  };
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
    <div className="createProject">
      <h4>CreateProject</h4>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <p>Project Name</p>
          <input type="text" name="projectName" className="form-control" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <EditorTinymce onEditorChange={handleEditorChange} />
        </div>
        <div className="form-group">
          <select name="categoryId" className="form-control" id="">
            <option value="" disabled selected hidden>
              Chọn loại dự án
            </option>
            {category?.map((category, idx) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.projectCategoryName}
                </option>
              );
            })}
          </select>
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
