import callApi from "../utils/callApi";
const projectApi = {
    fetchCategoryApi() { return callApi("ProjectCategory") },
    createProjectApi(data) { return callApi("Project/createProjectAuthorize", "POST", data) },
    getAllProjectApi() { return callApi("Project/getAllProject") },
    updateProjectApi(data) { return callApi(`Project/updateProject?projectId=${data.id}`, "PUT", data) },
    deleteProjectApi(id) { return callApi(`Project/deleteProject?projectId=${id}`, "DELETE") },
    assignUserProjectApi(data) { return callApi("Project/assignUserProject", "POST", data) },
    removeUserFromProject(data) { return callApi("Project/removeUserFromProject", "POST", data) },
}

export default projectApi