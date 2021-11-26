import callApi from "../utils/callApi";

const taskApi = {
    createTaskApi(data) { return callApi("Project/createTask", "POST", data) },
    updateTaskApi(data) { return callApi("Project/updateTask", "POST", data) }
}
export default taskApi;