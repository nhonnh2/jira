import callApi from "../utils/callApi";

const statusApi = {
    getAllStatusApi() { return callApi("Status/getAll") }
}
export default statusApi;