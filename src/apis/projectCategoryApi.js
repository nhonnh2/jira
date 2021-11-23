import callApi from "../utils/callApi";

const projectCategoryApi = {
    getAllProjectCategoryApi() { return callApi("ProjectCategory") }
}
export default projectCategoryApi;