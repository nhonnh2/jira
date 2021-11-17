import axios from "axios"
import { DOMAIN, TOKEN_CYBERSOFT } from "../settings/apiConfig"

const callApi = (endPoint, method = 'GET', data = null) => {
    return axios({
        url: `${DOMAIN+endPoint}`,
        method,
        data,
        headers: {
            // 'Authorization': 'Bearer ' + localStorage.getItem('accessToken'), 
            'TokenCybersoft': 'Bearer ' + TOKEN_CYBERSOFT
        }
    })
}
export default callApi;