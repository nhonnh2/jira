import React from "react";
import withModalForm from "../../../../hocs/hocModalForm/withModalForm";
import EditorTinymce from "../../../../utils/EditorTinymce";

function ModalEdit() {
  return (
    <>
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-6 form-group text-font-weight-bold">
              <label htmlFor="projectName" className="font-weight-bolder">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                className="form-control"
              />
            </div>
            <div className="col-6 form-group ">
              <label htmlFor="projectCategory" className="font-weight-bolder">
                Project Category
              </label>
              <input
                type="text"
                name="projectCategory"
                id="projectCategory"
                className="form-control"
              />
            </div>
            <div className="col-12 form-group">
              <EditorTinymce />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default withModalForm(ModalEdit);
