import callApi from "../utils/callApi";

const priorityApi = {
    getAllPriorityApi() { return callApi("Priority/getAll") }
}
export default priorityApi;