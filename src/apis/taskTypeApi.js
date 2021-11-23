import callApi from "../utils/callApi";

const taskTypeApi = {
    getAllTaskTypeApi() { return callApi("TaskType/getAll") }
}
export default taskTypeApi;