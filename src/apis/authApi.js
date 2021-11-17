import callApi from "../utils/callApi";

const authApi = {
    loginApi(data) { return callApi("Users/signin", "POST", data) }
}
export default authApi;