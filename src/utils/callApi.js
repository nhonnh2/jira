import axios from "axios"
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "../settings/apiConfig"

const callApi = (endPoint, method = 'GET', data = null) => {
    return axios({
        url: `${DOMAIN+endPoint}`,
        method,
        data,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            'TokenCybersoft': TOKEN_CYBERSOFT
        }
    })
}
export default callApi;