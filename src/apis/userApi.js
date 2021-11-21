import callApi from "../utils/callApi";

const userApi = {
    getUserApi(key) { return callApi(`Users/getUser?keyword=${key}`) }
}
export default userApi;