import callApi from "../utils/callApi";
const projectApi = {
    fetchCategoryApi() { return callApi("ProjectCategory") },
    createProjectApi(data) { return callApi("Project/createProjectAuthorize", "POST", data) },
    getAllProjectApi() { return callApi("Project/getAllProject") }
}

export default projectApi