import { withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import CategoryProjectSelect from "../../../../../components/CategoryProjectSelect/CategoryProjectSelect";
import EditorTinymce from "../../../../../components/EditorTinymce/EditorTinymce";
import { SHOW_MODAL_EDIT_PROJECT } from "../../../../../hocs/hocModalForm/module/types";
import withModalForm from "../../../../../hocs/hocModalForm/withModalForm";
import { actUpdateProjectSaga } from "./module/action";

function ModalEditProject(props) {
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
    <>
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-4 form-group ">
              <label htmlFor="idProject" className="font-weight-bolder">
                Id
              </label>
              <input
                type="text"
                name="id"
                id="idProject"
                className="form-control"
                disabled
                value={values.id}
              />
            </div>
            <div className="col-4 form-group">
              <label htmlFor="projectName" className="font-weight-bolder">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                className="form-control"
                value={values.projectName}
                onChange={handleChange}
              />
            </div>
            <div className="col-4 form-group ">
              <label htmlFor="projectCategory" className="font-weight-bolder">
                Project Category
              </label>

              <CategoryProjectSelect
                name="categoryId"
                value={values.categoryId}
                onChange={(value) => {
                  setFieldValue("categoryId", value);
                }}
                id="categoryId"
              />
            </div>

            <div className="col-12 form-group">
              <EditorTinymce
                name="description"
                onEditorChange={handleEditorChange}
                value={values.description}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
const modalEditFormik = withFormik({
  enableReinitialize: true,
  // mỗi lần render laij chayj laij mapPropsTovalues
  mapPropsToValues: (props) => {
    const { projectEdit } = props;
    console.log("projectEdit formik init", projectEdit);
    return {
      id: projectEdit.id ?? "",
      projectName: projectEdit.projectName ?? "",
      categoryId: projectEdit.categoryId ?? "",
      description: projectEdit.description ?? "",

      // categoryId:props.category[0]
    };
  },
  validationSchema: Yup.object().shape({
    categoryId: Yup.string().required("categoryId is required"),
  }),
  handleSubmit: (data, { props, setSubmitting }) => {
    props.dispatch(actUpdateProjectSaga(data));
  },
  displayName: "EditProject",
})(withModalForm(ModalEditProject, SHOW_MODAL_EDIT_PROJECT));
const mapStateToProps = (state) => ({
  projectEdit: state.modalFormReducer.data,
});
export default connect(mapStateToProps)(modalEditFormik);
