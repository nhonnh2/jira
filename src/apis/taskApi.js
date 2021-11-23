import callApi from "../utils/callApi";

const taskApi = {
    createTaskApi(data) { return callApi("Project/createTask", "POST", data) }
}
export default taskApi;