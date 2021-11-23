import callApi from "../utils/callApi";

const userApi = {
    getUserApi(key) { return callApi(`Users/getUser?keyword=${key}`) },
    getAllUserApi() { return callApi("Users/getUser") },
    getUserByProjectIdApi(id) { return callApi(`Users/getUserByProjectId?idProject=${id}`) }
}
export default userApi;